/**
 * Created by vlados on 25.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./createForm.template.js";

export default class CreateForm extends Component {
    constructor() {
        super({
            store
        });
        store.events.subscribe('addCpmTicket', this.reload.bind(this));
        this.methods = {
            addCpmTicket: function(){
                let ticket = {
                    comment: document.querySelector('input[name=input-comment]').value,
                    dateOfCreation: document.querySelector('input[name=input-creation-date]').value,
                    type: document.querySelector('input[name=input-type]').value,
                    status: document.querySelector('input[name=input-status]').value,
                    email: document.querySelector('input[name=input-email]').value,
                    customerId: store.state.cpm.currentCustomer.id
                }
                store.dispatch('addCpmTicket', ticket);
                // alert(JSON.stringify(ticket))
                return false;
            },
        }
    }

    render() {
        return this.compile(template.call(this));
    }
}
