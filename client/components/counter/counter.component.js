/**
 * Created by vlados on 18.11.2020
 */
import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./counter.template.js";
import Button from "./button/button.component.js";
import Value from "./value/value.component.js";

export default class Counter extends Component {
    constructor() {
        super({
            store
        },
        {
            button: (...args) => new Button(...args).render(),
            value: (...args) => new Value(...args).render(),
        }
        );
    }

    render() {
        return this.compile(template.call(this));
    }
}
