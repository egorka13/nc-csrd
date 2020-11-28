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
        store.events.subscribe('setCpmCurrentCustomer', this.reload.bind(this));
        store.events.subscribe('changeCpmTicket', this.reload.bind(this));
        this.data = {
            types: store.state.cpm.ticketTypes,
            statuses: store.state.cpm.ticketStatuses,
            currentTicket: store.state.cpm.currentTicket
        };
        this.methods = {
            addCpmTicket: function(){
                let ticket = {
                    status: 'active',
                    comment: document.querySelector('textarea[name=input-comment]').value,
                    dateOfCreation: document.querySelector('input[name=input-creation-date]').value,
                    type: document.querySelector('input[name=input-type]').dataset.name,
                    email: store.state.cpm.currentCustomer.email,
                    customerId: store.state.cpm.currentCustomer.id
                }
                store.dispatch('addCpmTicket', ticket);
                // alert(JSON.stringify(ticket))
                return false;
            },
            updateCpmTicket: () => {
                let ticket = this.data.currentTicket;
                console.log(ticket)

                let oldStatus = ticket.status;

                ticket.comment = document.querySelector('textarea[name=input-comment]').value;
                ticket.dateOfCreation = document.querySelector('input[name=input-creation-date]').value;
                ticket.type = document.querySelector('input[name=input-type]').dataset.name;
                ticket.status = document.querySelector('input[name=input-status]').dataset.name;

                if(oldStatus === 'active' && ticket.status !== oldStatus){
                    ticket.closingDate = this.methods.getCurrentDate();
                }

                store.dispatch('updateCpmTicket', ticket);

                return false;
            },
            openTypeDropdown: function(event){
                event.stopPropagation();
                let dropdown = document.querySelector('._type .input__dropdown'),
                    button = document.querySelector('._type .input__button'),
                    closer = document.querySelector('._type .input__closer');
                button.style.display = 'none';
                closer.style.display = 'block';
                dropdown.style.display = 'block';
                dropdown.classList.add('_show');
            },
            openStatusDropdown: function(event){
                event.stopPropagation();
                let dropdown = document.querySelector('._status .input__dropdown'),
                    button = document.querySelector('._status .input__button'),
                    closer = document.querySelector('._status .input__closer');
                button.style.display = 'none';
                closer.style.display = 'block';
                dropdown.style.display = 'block';
                dropdown.classList.add('_show');
            },
            setTypeValue: (event) => {
                let item = event.target.closest('.input__item');
                let name = item.dataset.name;
                let input = document.querySelector('._type input[name=input-type]');
                input.value = this.data.types[name].name;
                input.setAttribute('data-name', name);
                this.methods.closeTypeDropdown();
            },
            setStatusValue: (event) => {
                let item = event.target.closest('.input__item');
                let name = item.dataset.name;
                let input = document.querySelector('._status input[name=input-status]');
                input.value = this.data.statuses[name].name;
                input.setAttribute('data-name', name);
                this.methods.closeStatusDropdown();
            },
            closeTypeDropdown: () => {
                let dropdown = document.querySelector('._type .input__dropdown'),
                    button = document.querySelector('._type .input__button'),
                    closer = document.querySelector('._type .input__closer');
                closer.style.display = 'none';
                button.style.display = 'flex';
                dropdown.classList.remove('_show');
            },
            closeStatusDropdown: () => {
                let dropdown = document.querySelector('._status .input__dropdown'),
                    button = document.querySelector('._status .input__button'),
                    closer = document.querySelector('._status .input__closer');
                closer.style.display = 'none';
                button.style.display = 'flex';
                dropdown.classList.remove('_show');
            },
            backToCreate: () => {
                store.state.cpm.currentTicket = null;
                console.log(store.state.cpm.currentTicket)
                this.reload.call(this);
            },
            getCurrentDate: function(){
                let now = new Date();

                let dd = now.getDate();
                if(dd < 10){
                    dd = '0' + dd;
                }

                let mm = now.getMonth() + 1;
                if(mm < 10){
                    mm = '0' + mm;
                }

                let yy = now.getFullYear();

                return `${dd}.${mm}.${yy}`
            }
        }
    }

    render() {
        this.data.currentTicket = store.state.cpm.currentTicket;
        console.log(this.data.currentTicket)
        return this.compile(template.call(this));
    }
}
