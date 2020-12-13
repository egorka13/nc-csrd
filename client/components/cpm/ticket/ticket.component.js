/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./ticket.template.js";

export default class Ticket extends Component {
    constructor(ticket, modifyHandler, reopenHandler, cancelHandler) {
        super({
            store,
            ticket,
            modifyHandler,
            reopenHandler,
            cancelHandler
        });

        // variables that we can use in the template
        this.data = () => {
            return {}
        };

        // methods that we can call or pass in the template
        this.methods = {
            filterByStatus(event) {
                event.stopPropagation();
                let value = event.target.textContent;
                store.dispatch('filterCpmTickets', {
                    status: value
                });
            },
            filterByType(event) {
                event.stopPropagation();
                let value = event.target.textContent;
                store.dispatch('filterCpmTickets', {
                    type: value
                });
            },
            getTypeColor(type) {
                let types = store.state.cpm.ticketTypes;

                if (types[type]) {

                    return types[type].color
                }

                return '#999999';
            },
            getStatusColor(status) {

                let statuses = store.state.cpm.ticketStatuses;

                if (statuses[status]) {


                    return statuses[status].color
                }

                return '#999999';
            }
        };
    }

    render() {
        return this.compile(template.call(this));
    }
}
