/**
 * Created by vlados on 18.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./value.template.js";

export default class Value extends Component {
    constructor(num) {
        super({
            store,
            num
        });
        store.events.subscribe('incrementValue', this.reload.bind(this));
    }

    render() {
        return this.compile(template.call(this));
    }
}
