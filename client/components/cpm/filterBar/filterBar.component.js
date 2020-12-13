/**
 * Created by vlados on 04.12.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./filterBar.template.js";
import Checkbox from "../checkbox/checkbox.component";
import DatePicker from "../datePicker/datePicker.component";
import {stringISOToDate} from "../../../modules/date/date";

export default class FilterBar extends Component {
    constructor() {
        super({
            store
        }, {
            Checkbox: (...args) => new Checkbox(...args).render(),
            DatePicker: (...args) => new DatePicker(...args).render(),
        });

        // variables that we can use in the template
        this.data = {
            isChanged: false,
            filters: [
                {
                    name: 'Type',
                    minName: 'type',
                    values: Array.from(store.state.cpm.ticketFilters.type),
                    items: {
                        support: 'Support',
                        security: 'Security',
                        billing: 'Billing',
                        order: 'Sales order',
                        generic: 'Generic'
                    }
                },
                {
                    name: 'Status',
                    minName: 'status',
                    values: Array.from(store.state.cpm.ticketFilters.status),
                    items: {
                        active: 'Active',
                        canceled: 'Canceled',
                        executing: 'Executing',
                        done: 'Done',
                        notDone: 'Not Done'
                    }
                },
                {
                    name: 'Creation date',
                    minName: 'dateOfCreation',
                    bounds: [
                        store.state.cpm.ticketFilters.datesOfCreation.begin,
                        store.state.cpm.ticketFilters.datesOfCreation.end,
                    ]
                },
                {
                    name: 'Closing date',
                    minName: 'closingDate',
                    bounds: [
                        store.state.cpm.ticketFilters.closingDates.begin,
                        store.state.cpm.ticketFilters.closingDates.end,
                    ]
                },
            ]
        };

        // analogue of computed variables that we can use in the template
        this.computed = {
            filters: () => {
                return store.state.cpm.ticketFilters;
            }
        }

        // methods that we can call or pass in the template
        this.methods = {
            datePickerHandler: (name, index) => {
                const filter = this.data.filters.find(filter => filter.minName === name);
                if (filter) {
                    return ((event) => {
                        filter.bounds[index] = stringISOToDate(event.target.value);
                        this.methods.showApplyButton();

                    }).bind(this);
                }
            },
            setFilters: () => {
                this.methods.removeApplyButton();
                store.dispatch('setFilters', {
                    types: this.data.filters[0].values,
                    statuses: this.data.filters[1].values,
                    datesOfCreation: this.data.filters[2].bounds,
                    closingDates: this.data.filters[3].bounds,
                });
                this.reload.call(this);
            },
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
            showApplyButton: () => {
                if (!this.data.isChanged){
                    this.data.isChanged = true;
                    this.reloadElement(template.call(this), 'apply');
                }
            },
            removeApplyButton: () => {
                if (this.data.isChanged) {
                    this.data.isChanged = false;
                    this.reloadElement(template.call(this), 'apply');
                }
            },
            changeFilters: (data) => {
                this.methods.showApplyButton();

                if(data.checked) {
                    const currFilter = this.data.filters
                        .find(filter => filter.minName === data.param);
                    currFilter.values.push(data.value);
                } else {
                    const currFilter = this.data.filters
                        .find(filter => filter.minName === data.param);
                    currFilter.values.splice(currFilter.values.indexOf(data.value), 1);
                }
                console.log(this.data.filters);
            }
        };

        store.events.subscribe('check', this.methods.changeFilters.bind(this));
        // subscribing some events that trigger some action with our component

    }

    render() {
        console.log(this.data.filters);

        //some actions that we call before rendering our template

        return this.compile(template.call(this));
    }
}
