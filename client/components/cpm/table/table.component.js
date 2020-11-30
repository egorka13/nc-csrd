/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./table.template.js";
import {templateTitleAll} from "./table.template.js";
import Ticket from "../ticket/ticket.component.js";

export default class Table extends Component {
    constructor() {
        super({
            store
        });

        // components that we use as children of our component
        this.components = {
            Ticket: (...args) => new Ticket(...args).render()
        }

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
            showAll: () => {
                if (Object.keys(store.state.cpm.ticketFilters).length !== 0) {
                    return [this.compile(templateTitleAll.call(this))]
                }
                return [];
            }
        }

        // methods that we can call or pass in the template
        this.methods = {
            changeCpmTicket(event) {
                let ticket = event.target.closest('.cpm-table__ticket');
                store.dispatch('setCurrentCpmTicket', ticket.dataset.ticket);

                console.log(this.element);
                const btn = this.element.querySelector('.cpm-table__button');
                btn.classList.remove('_hide');
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
            openCreateForm: () => {
                store.dispatch('openCreateForm');

                const btn = this.element.querySelector('.cpm-table__button');
                btn.classList.add('_hide');
            },

        };

        // subscribing some events that trigger some action with our component
        store.events.subscribe('clearCpmTicketsFilters', this.reload.bind(this));
        store.events.subscribe('filterCpmTickets', this.reload.bind(this));
    }

    render() {
        //some actions that we call before rendering our template

        if (store.state.cpm.tickets.length === 0) {
            this.methods.getCpmTickets()
                .then(this.reload.bind(this));
        }

        return this.compile(template.call(this));
    }
}
