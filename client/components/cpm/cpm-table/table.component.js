import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./table.template.js";

export default class CpmTable extends Component {
    constructor(data) {
        super({
            store,
            data
        });
        this.isSort = false;
        this.methods = {
            changeCpmTicket(event){
                let ticket = event.target.closest('.cpm-table__ticket');
                store.dispatch('changeCpmTicket', ticket.dataset.ticket);
            },
            clearFilters(event){
                store.dispatch('loadCpmTickets');
            }

        };
        store.events.subscribe('addCpmTicket', this.reload.bind(this));
        store.events.subscribe('loadCpmTickets', this.reload.bind(this));
        store.events.subscribe('filterCpmTickets', this.reload.bind(this));
        store.events.subscribe('setCpmCurrentCustomer', this.reload.bind(this));
    }

    render() {
        // let tickets = store.getter('getCpmTickets');
        // console.log('GETTER CPM TICKETS')
        // console.log(tickets);

        this.compile(template.call(this));

        return this.element;
    }
}
