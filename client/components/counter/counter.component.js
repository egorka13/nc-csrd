/**
 * Created by vlados on 18.11.2020
 */
import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./counter.template.js";

export default class Counter extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
