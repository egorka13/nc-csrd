/**
 * Created by vlados on 29.11.2020
 */
 import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./ticket.template.js";

export default class ticket extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
