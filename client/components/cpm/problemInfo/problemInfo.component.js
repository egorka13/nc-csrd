/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./problemInfo.template.js";

export default class ProblemInfo extends Component {
    constructor() {
        super({
            store
        });
        store.events.subscribe('changeCpmTicket', this.reload.bind(this));
        store.events.subscribe('setCurrentTicket', this.reload.bind(this));
    }

    render() {
        return this.compile(template.call(this));
    }
}
