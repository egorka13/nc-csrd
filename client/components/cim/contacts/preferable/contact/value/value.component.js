import Component from '../../../../../../modules/component/component.js';
import store from '../../../../../../store/index.js';
import {template} from "./value.template.js";

export default class Value extends Component {
    constructor(value) {
        super({
            store,
        });
        this.store = store;
        this.contactValue = value;
    }

    render() {
        return this.compile(template.call(this, this.contactValue));
    }
}