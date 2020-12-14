import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./CustomerInfo.template.js";

export default class CustomerInfo extends Component {
    constructor() {
        super({
            store,
        });
        this.store = store;
    }

    render() {
        return this.compile(template.call(this));
    }
}