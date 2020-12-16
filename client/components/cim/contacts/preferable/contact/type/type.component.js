import Component from '../../../../../../modules/component/component.js';
import store from '../../../../../../store/index.js';
import {template} from "./type.template.js";

export default class Type extends Component {
    constructor(type) {
        super({
            store,
        });
        this.store = store;
        this.contactType = type;
    }

    render() {
        return this.compile(template.call(this, this.contactType));
    }
}