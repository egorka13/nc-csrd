import Component from '../../../../../modules/component/component.js';
import store from '../../../../../store/index.js';
import {template} from "./contact.template.js";

export default class Contact extends Component {
    constructor(contact) {
        super({
            store,
        });
        this.store = store;
        this.contact = contact;
    }

    render() {
        return this.compile(template.call(this, this.contact));
    }
}