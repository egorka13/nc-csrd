/**
 * Created by vlados on 04.12.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./sortBar.template.js";

export default class SortBar extends Component {
    constructor() {
        super({
            store
        }, {
            // components that we use as children of our component
        });

        // variables that we can use in the template
        this.data = {
            sorts: [
                {
                    name: 'Creation date',
                    minName: 'dateOfCreation',
                    asc: true
                },
                {
                    name: 'Closing date',
                    minName: 'closingDate',
                    asc: true
                },
            ]
        };

        // analogue of computed variables that we can use in the template
        this.computed = {}

        // methods that we can call or pass in the template
        this.methods = {
            openDropdown: (event) => {
                event.stopPropagation();
                const oldDropdown = this.element.querySelector(`.input__dropdown._show`);
                if(oldDropdown) {
                    oldDropdown.classList.remove('_show');
                    const oldParam = oldDropdown.closest('.filter-bar__filter').dataset.param;
                    const oldCloser = this.element.querySelector(`*[data-param=${oldParam}] .input__closer`);
                    const oldButton = this.element.querySelector(`*[data-param=${oldParam}] .input__button`);
                    if(oldCloser) {
                        oldCloser.style.display = 'none';
                        oldButton.style.display = 'flex';
                    }
                }
                const param = event.target.closest('.filter-bar__filter').dataset.param;
                let dropdown = this.element.querySelector(`*[data-param=${param}] .input__dropdown`),
                    button = this.element.querySelector(`*[data-param=${param}] .input__button`),
                    closer = this.element.querySelector(`*[data-param=${param}] .input__closer`);
                button.style.display = 'none';
                closer.style.display = 'block';
                dropdown.style.display = 'block';
                dropdown.classList.add('_show');
            },
            closeDropdown: (event) => {
                event.stopPropagation();
                const param = event.target.closest('.filter-bar__filter').dataset.param;
                let dropdown = this.element.querySelector(`*[data-param=${param}] .input__dropdown`),
                    button = this.element.querySelector(`*[data-param=${param}] .input__button`),
                    closer = this.element.querySelector(`*[data-param=${param}] .input__closer`);
                closer.style.display = 'none';
                button.style.display = 'flex';
                dropdown.classList.remove('_show');
            },
            setValue: (event) => {
                const item = event.target.closest('.input__item');
                const asc = item.dataset.name;
                const param = item.dataset.param;
                store.commit('setSort', {param, asc: asc === 'asc'})
                // if(param === 'type') {
                //     store.dispatch('setTicketToCreate',
                //         Object.fromEntries([[param, name]]));
                // }

            },
        };

        // subscribing some events that trigger some action with our component

    }

    render() {

        //some actions that we call before rendering our template

        return this.compile(template.call(this));
    }
}
