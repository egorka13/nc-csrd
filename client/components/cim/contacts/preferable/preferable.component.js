import Component from '../../../../modules/component/component.js';
import store from '../../../../store/index.js';
import {template} from "./preferable.template.js";
import Type from "./contact/type/type.component";
import Value from "./contact/value/value.component";

export default class Preferable extends Component {
    constructor(preferable) {
        super({
            store,
        });
        this.store = store;
        this.preferable = preferable;
    }

    render() {
        return this.compile(template.call(this, this.preferable));
    }
}