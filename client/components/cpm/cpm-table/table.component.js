import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./table.template.js";

export default class CpmTable extends Component {
    constructor() {
        super({
            store
        });
        store.events.subscribe('addCpmTicket', this.reload.bind(this));
        store.events.subscribe('loadCpmTickets', this.reload.bind(this));
    }

    render() {
        // let tickets = store.getter('getCpmTickets');
        // console.log('GETTER CPM TICKETS')
        // console.log(tickets);
        return this.compile(template.call(this));
    }
}
