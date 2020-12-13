import {template} from "../../components/cpm/cpm.template";

export default class Component {
    constructor(props = {}, components) {
        this.render = this.render || function() {};

        this.props = props;

        this.components = components;

        this.name = this.name || '';
    }

    reload(){
        console.groupCollapsed('RELOAD');
        console.log(this);
        console.groupEnd();
        if(this.element && this.element.parentElement){

            let oldElement = this.element;
            let newElement = this.render();

            oldElement.parentElement.replaceChild(newElement, oldElement);
        }
        else {
            this.render();
        }
    }

    reloadElement(template, elementName){
        console.groupCollapsed('RELOAD ' + elementName);
        const oldElement = document.querySelector(`*[data-name=${elementName}]`);
        console.log(oldElement);
        const elementTemplate = this.searchElement(template, elementName);
        console.log(elementTemplate);
        if(oldElement && elementTemplate) {
            const newElement = this.compileElement(elementTemplate);
            console.log(newElement);
            oldElement.parentElement.replaceChild(newElement, oldElement);
        }
        console.groupEnd();
    }

    searchElement(template, elementName){
        if(template.attributes && template.attributes['data-name'] &&
            template.attributes['data-name'] === elementName) {

            return template;
        }

        if(template.children) {
            for(let child of template.children){
                if (!(child instanceof HTMLElement)){
                    if (this.searchElement(child, elementName))
                        return this.searchElement(child, elementName);
                }
            }
        }
    }

    compile(template){
        this.element = document.createElement(template.tagName || 'div');
        this.element = this.generate(this.element, template);
        return this.element;
    }

    compileElement(template){
        let element = document.createElement(template.tagName || 'div');
        element = this.generate(element, template);
        return element;
    }

    generate(element, template, data){
        if(template !== null){

            if(template.hasOwnProperty('for')  && Array.isArray(this.evalValue(template['for'], data))) {

                return this.evalValue(template['for'], data).map((item) => {
                    const newElement = document.createElement(template.tagName || 'div');
                    const childTemplate = Object.assign(template);
                    delete childTemplate.for;
                    return this.generate(newElement, template, item);
                });
            }

            if(template.hasOwnProperty('if') && !this.evalValue(template['if'], data)) {
                element.style.display = 'none';

                return element;
            }

            if(template.hasOwnProperty('component')) {
                if (template.hasOwnProperty('arguments')) {

                    return this.components[template.component](
                        ...template.arguments.map(arg => this.evalValue(arg, data)));
                }
                return this.components[template.component]();
            }

            if(template.hasOwnProperty('classList')) {
                template.classList.forEach(className => {
                    element.classList.add(this.evalValue(className, data));
                });
            }

            if(template.hasOwnProperty('attributes')) {
                for(let attrName in template.attributes) {
                    if(attrName in element){
                        element[attrName] = this.evalValue(template.attributes[attrName], data);
                    }
                    else{
                        element.setAttribute(attrName, this.evalValue(template.attributes[attrName], data));
                    }
                }
            }

            if(template.hasOwnProperty('events')) {
                for(let eventName in template.events){
                    if(eventName in element) {
                        element[eventName] = this.evalValue(template.events[eventName], data);

                        window[template.events[eventName].name] = this.evalValue(template.events[eventName], data);
                    }
                }
            }

            if(template.hasOwnProperty('textContent')) {
                element.textContent = this.evalValue(template.textContent, data);
            }

            if(template.hasOwnProperty('children')) {
                template.children.forEach(child => {
                    if(child instanceof HTMLElement) {
                        element.append(child);
                    }
                    else{
                        if(child){
                            const childElement = document.createElement(child.tagName || 'div');
                            const newElements = this.generate(childElement, child, data);
                            if(Array.isArray(newElements)) {
                                newElements.forEach(newElement => element.append(newElement));
                            } else {
                                element.append(newElements);
                            }
                        }
                    }
                })
            }

            return element;
        }
    }

    isStatement(str) {

        return str.trim().slice(0, 2) === '{{' && str.trim().slice(-2) ==='}}';
    }

    evalValue(value, item) {
        if(!item || typeof value !== 'string' || !this.isStatement(value)) {
            return value
        }

        return (new Function('item', 'return ' + value.trim().slice(2, -2)))(item);
    }

    hide(){
        this.display = this.element.style.display;
        this.element.style.display = 'none';
    }

    show(){
        this.element.style.display = this.display || 'block';
    }
}
