/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./table.template.js";
import Ticket from "../ticket/ticket.component.js";
import FilterTrigger from "../filterTrigger/filterTrigger.component";
import FilterBar from "../filterBar/filterBar.component";
import SortBar from "../sortBar/sortBar.component";

export default class Table extends Component {
    constructor() {
        super({
            store
        }, {
            Ticket: (...args) => new Ticket(...args).render(),
            FilterTrigger: (...args) => new FilterTrigger(...args).render(),
            FilterBar: (...args) => new FilterBar(...args).render(),
            SortBar: (...args) => new SortBar(...args).render(),
        });

        // variables that we can use in the template
        this.data = () => {
            return {
                tickets: store.getter('getCpmTickets'),
                params: store.state.cpm.ticketTableParams,
                status: store.state.cpm.status
            }
        };

        // analogue of computed variables that we can use in the template
        this.computed = {
            ticketFilters: () => store.state.cpm.ticketFilters,
        }

        // methods that we can call or pass in the template
        this.methods = {
            changeCpmTicket: (event) => {
                const dots = event.target.closest('.ticket__dots');
                if (dots) {
                    const oldDropdown = this.element.querySelector('.ticket__dropdown._show');
                    const dropdown = dots.nextElementSibling;
                    if (oldDropdown && oldDropdown !== dropdown) {
                        oldDropdown.classList.remove('_show');
                    }
                    dropdown.classList.toggle('_show');
                }
                else {
                    this.methods.showTicketInfo(event);
                }
            },
            showTicketInfo: (event) => {
                let ticket = event.target.closest('.ticket');
                store.dispatch('setCurrentCpmTicket', ticket.dataset.ticket);

                const btn = this.element.querySelector('.cpm-table__button');
                if(btn.classList.contains('_hide')) {
                    btn.classList.remove('_hide');
                }
            },
            openModifyForm: (event) => {
                event.stopPropagation();
                let ticket = event.target.closest('.ticket');
                store.dispatch('setCurrentCpmTicket', ticket.dataset.ticket);
                this.props.store.dispatch('openModifyForm');
                const dropdown = this.element.querySelector('.ticket__dropdown._show');
                dropdown.classList.remove('_show');

            },
            clearFilters() {
                store.dispatch('clearCpmTicketsFilters');
            },
            async getCpmTickets() {
                const url = 'https://nc-csrd.firebaseio.com/problems.json';
                const response = await fetch(url);
                const data = await response.json();

                console.groupCollapsed('fetch GET /problems.json');

                const tickets = Object
                    .entries(data)
                    .map(([id, ticket]) => {
                        ticket.id = id;
                        return ticket;
                    });

                console.log(tickets);

                store.commit('loadCpmTickets', tickets);
                store.commit('setInitialCpmCurrentTicket', tickets[tickets.length - 1]);
                console.groupEnd();
            },
            modifyTicket: (status) => {
                return (event) => {
                    event.stopPropagation();

                    const ticket = event.target.closest('.ticket');
                    const id = ticket.dataset.ticket;

                    const url = `https://nc-csrd.firebaseio.com/problems/${id}.json`;
                    const config = {
                        method: 'PATCH',
                        body: JSON.stringify({ status })
                    };

                    fetch(url, config)
                        .then(function(response){
                            if(response.ok){
                                store.commit('addCpmTicket');
                                response.json().then(function(data){
                                    store.commit('setCurrentCpmTicket', id);
                                })
                            }
                        });

                    return false;
                }
            },
            openCreateForm: () => {
                store.commit('openCreateForm');

                const btn = this.element.querySelector('.cpm-table__button');
                btn.classList.add('_hide');
            },
            changeSort: (event) => {
                event.stopPropagation();
                const header = event.target.closest('.ticket__col_header');
                if (header.dataset.name === 'closingDate' || header.dataset.name === 'dateOfCreation') {
                    store.dispatch('changeSort', header.dataset.name);
                }
            },
            toggleFilterBar: () => {
                this.reloadElement(template.call(this), 'filterBar');
            },
            reloadList: () => {
                this.reloadElement(template.call(this), 'tableList');
                this.reloadElement(template.call(this), 'tableTitle');
            },
        };

        // subscribing some events that trigger some action with our component
        store.events.subscribe('clearCpmTicketsFilters', this.reload.bind(this));
        store.events.subscribe('filterCpmTickets', this.reload.bind(this));
        store.events.subscribe('setSort', this.reload.bind(this));
        store.events.subscribe('changeSort', this.reload.bind(this));
        store.events.subscribe('setFilters', this.methods.reloadList.bind(this));
        store.events.subscribe('addCpmTicket', this.methods.reloadList.bind(this));
        store.events.subscribe('toggleFilterBar', this.methods.toggleFilterBar.bind(this));
        store.events.subscribe('toggleSortBar', this.methods.toggleFilterBar.bind(this));

    }

    render() {
        //some actions that we call before rendering our template

        if (store.state.cpm.tickets.length === 0) {
            this.methods.getCpmTickets()
                .then(this.methods.reloadList.bind(this));
        }

        return this.compile(template.call(this));
    }
}
