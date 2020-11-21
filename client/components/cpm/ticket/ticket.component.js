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
    }

    render() {
        return this.compile(template.call(this));
    }
}
