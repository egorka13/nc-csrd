/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./ticket.template.js";

export default class Ticket extends Component {
    constructor(ticket) {
        super({
            store,
            ticket
        });

        this.isFilter = false;

        this.methods = {
            filterByStatus(event){
                event.stopPropagation();
                let value = event.target.textContent;
                store.dispatch('filterCpmTickets', {
                    key: 'status',
                    value: value
                });
            },
            filterByType(event){
                event.stopPropagation();
                let value = event.target.textContent;
                store.dispatch('filterCpmTickets', {
                    key: 'type',
                    value: value
                });
            }
        };
    }

    render() {
        return this.compile(template.call(this));
    }
}
