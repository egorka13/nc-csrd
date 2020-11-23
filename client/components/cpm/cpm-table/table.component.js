import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./table.template.js";

export default class CpmTable extends Component {
    constructor() {
        super({
            store
        });
        this.methods = {
            changeCpmTicket(event){
                let ticket = event.target.closest('.cpm-table__ticket');
                store.dispatch('changeCpmTicket', ticket.dataset.ticket);
            }
        };
        store.events.subscribe('addCpmTicket', this.reload.bind(this));
        store.events.subscribe('loadCpmTickets', this.reload.bind(this));
    }

    render() {
        // let tickets = store.getter('getCpmTickets');
        // console.log('GETTER CPM TICKETS')
        // console.log(tickets);

        this.compile(template.call(this));

        this.element.addEventListener('generate', function(){
            let table = document.querySelector('.cpm-table');
            table.classList.remove('_hidden');
        })

        return this.element;
    }
}
