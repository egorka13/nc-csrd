/**
 * Created by vlados on 25.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./selectForm.template.js";

export default class SelectForm extends Component {
    constructor() {
        super({
            store
        });

        store.events.subscribe('setCpmCurrentCustomer', this.reload.bind(this));
    }

    render() {
        return this.compile(template.call(this));
    }
}
