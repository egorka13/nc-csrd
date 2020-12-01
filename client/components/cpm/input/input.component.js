/**
 * Created by vlados on 29.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./input.template.js";

export default class Input extends Component {
    constructor(param, paramName, textContent, items, disabled) {
        super({
            store,
            param,
            paramName,
            textContent,
            items,
            disabled
        });

        // components that we use as children of our component
        this.components = {}

        // variables that we can use in the template
        this.data = () => {
            return {}
        };

        // analogue of computed variables that we can use in the template
        this.computed = {}

        // methods that we can call or pass in the template
        this.methods = {
            openDropdown: (event) => {
                event.stopPropagation();
                let dropdown = this.element.querySelector('.input__dropdown'),
                    button = this.element.querySelector('.input__button'),
                    closer = this.element.querySelector('.input__closer');
                button.style.display = 'none';
                closer.style.display = 'block';
                dropdown.style.display = 'block';
                dropdown.classList.add('_show');
            },

            setValue: (event) => {
                const item = event.target.closest('.input__item');
                const name = item.dataset.name;
                const param = item.dataset.param;
                const input = this.element.querySelector(`input[name=input-${param}]`);
                input.value = this.props.items[name];
                input.setAttribute('data-name', name);
                this.methods.closeDropdown();
                if(param === 'type') {
                    store.dispatch('setTicketToCreate',
                        Object.fromEntries([[param, name]]));
                }
            },

            closeDropdown: () => {
                let dropdown = this.element.querySelector('.input__dropdown'),
                    button = this.element.querySelector('.input__button'),
                    closer = this.element.querySelector('.input__closer');
                closer.style.display = 'none';
                button.style.display = 'flex';
                dropdown.classList.remove('_show');
            },
        };

        // subscribing some events that trigger some action with our component

    }

    render() {
        console.groupCollapsed('RENDER Input');
        console.log(this.props.items)
        console.groupEnd()
        //some actions that we call before rendering our template

        return this.compile(template.call(this));
    }
}
