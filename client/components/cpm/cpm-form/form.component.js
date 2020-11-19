import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./form.template.js";

export default class CpmForm extends Component {
    constructor() {
        super({
            store
        });
        //some changes
        this.props.store.events.subscribe('addCpmTicket', this.reload.bind(this));
        this.methods = {
            addCpmTicket: function(){
                let ticket = {
                    comment: document.querySelector('textarea[name=comment]').value,
                    dateOfCreation: document.querySelector('input[name=dateOfCreation]').value,
                    type: document.querySelector('input[name=type]').value,
                    status: document.querySelector('input[name=status]').value,
                    closingDate: document.querySelector('input[name=closingDate]').value,
                }
                store.dispatch('addCpmTicket', ticket);
                return false;
            },
        }
    }

    render() {
        return this.compile(template.call(this));
    }
}
