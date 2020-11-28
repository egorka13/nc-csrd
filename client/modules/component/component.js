import Store from '../store/store.js';

export default class Component {
    constructor(props = {}) {
        this.render = this.render || function() {};

        this.props = props;

        this.name = this.name || '';
    }

    reload(){
        console.log('RELOAD')
        if(this.element && this.element.parentElement){
            let temp = document.createElement('h1');
            temp.textContent = String(new Date());
            this.element.prepend(temp);

            let oldElement = this.element;
            let newElement = this.render();

            oldElement.parentElement.replaceChild(newElement, oldElement);
        }
        else {
            this.render();
        }

    }

    compile(template){
        this.element = document.createElement(template.tagName || 'div');
        this.element = this.generate(this.element, template);
        return this.element;
    }

    generate(element, template){
        if(template.hasOwnProperty('classList'))
            template.classList.forEach(className => element.classList.add(className));
        if(template.hasOwnProperty('attributes'))
            for(let attrName in template.attributes)
                element.setAttribute(attrName, template.attributes[attrName]);
            //change CamelCase
        if(template.hasOwnProperty('events'))
            for(let eventName in template.events){
                if(eventName in element) {
                    element[eventName] = template.events[eventName];
                    window[template.events[eventName].name] = template.events[eventName];
                }
            }

        if(template.hasOwnProperty('textContent'))
            element.textContent = template.textContent;
        if(template.hasOwnProperty('children'))
            template.children.forEach(child => {
                if(child instanceof HTMLElement)
                    element.append(child);
                else{
                    let childElement = document.createElement(child.tagName || 'div');
                    element.append(this.generate(childElement, child));
                }
            })
        return element;
    }

    hide(){
        this.display = this.element.style.display;
        this.element.style.display = 'none';
    }

    show(){
        this.element.style.display = this.display || 'block';
    }
}
