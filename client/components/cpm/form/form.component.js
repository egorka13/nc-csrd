/**
 * Created by vlados on 29.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./form.template.js";
import Input from "../input/input.component";

export default class Form extends Component {
    constructor() {
        super({
            store
        });

        // components that we use as children of our component
        this.components = {
            Input: (...args) => new Input(...args).render(),
        }

        // variables that we can use in the template
        this.data = () => {
            return {
                status: store.state.cpm.status,
                types: store.state.cpm.ticketTypes,
                statuses: store.state.cpm.ticketStatuses,
                type: store.state.cpm.ticketToCreate.type,
                customerId: store.state.cpm.currentCustomer.id,
                billingId: store.state.cpm.currentCustomer.billingId,
                emails: store.state.cpm.currentCustomer.contacts
                    .filter(contact => contact.type === 'email'),
                email: store.state.cpm.ticketToCreate.email,
                currentTicket: store.state.cpm.currentTicket
            }
        };

        // analogue of computed variables that we can use in the template
        this.computed = {
            createTypeValue: () => {
                return this.data().type ?
                    this.data().types[this.data().type].name : ''
            },
            dropdownTypes: () => {
                return Object.fromEntries(
                    Object.entries(this.data().types).map(([name, type]) => {
                        return [name, type.name]
                    })
                )
            },
            dropdownStatuses: () => {
                return Object.fromEntries(
                    Object.entries(this.data().types).map(([name, type]) => {
                        return [name, type.name]
                    })
                )
            },
            email: () => {
                if(this.data().email)
                    return this.data().email;
                return '';
            },
            emails: () => {
                return Object
                    .fromEntries(
                        this.data()
                            .emails
                            .map(email => [email.value, email.value])
                    );
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

        // methods that we can call or pass in the template
        this.methods = {
            generateTicket: () => {
                const params = Object.keys(this.data().types[this.data().type].availableParameters);
                let ticket = {}

                ticket.status = 'active';
                ticket.type = this.data().type;
                ticket.closingDate = '';

                params.forEach(param => {
                    switch(param) {
                        case 'id':
                            break;
                        case 'customerId':
                            ticket.customerId = this.data().customerId;
                            break;
                        case 'billingId':
                            ticket.billingId = this.data().billingId;
                            break;
                        case 'comment':
                            ticket[param] = this.element
                                .querySelector(`textarea[name=input-${param}]`).value;
                            break;
                        default:
                            ticket[param] = this.element
                                .querySelector(`input[name=input-${param}]`).value;
                    }
                })

                return ticket;
            },
            createTicket: () => {
                const ticket = this.methods.generateTicket();

                const url = 'https://nc-csrd.firebaseio.com/problems.json';
                const config = {
                    method: 'POST',
                    body: JSON.stringify(ticket)
                };

                const loader = this.element.querySelector('.form__loader');
                loader.classList.add('_show');

                fetch(url, config)
                    .then(function(response){
                        if(response.ok){
                            store.commit('addCpmTicket', ticket);
                            response.json().then(function(data){
                                store.commit('setCurrentCpmTicket', data.name);
                            })
                        }
                    });

                return false;
            },
            modifyTicket: () => {
                const ticket = this.methods.generateTicket();

                const url = 'https://nc-csrd.firebaseio.com/problems.json';
                const config = {
                    method: 'POST',
                    body: JSON.stringify(ticket)
                };

                const loader = this.element.querySelector('.form__loader');
                loader.classList.add('_show');

                fetch(url, config)
                    .then(function(response){
                        if(response.ok){
                            store.commit('addCpmTicket', ticket);
                            response.json().then(function(data){
                                store.commit('setCurrentCpmTicket', data.name);
                            })
                        }
                    });

                return false;
            },
            generateCreateForm: () => {
                return Object
                    .entries(this.data().types[this.data().type].availableParameters)
                    .map(([key, value]) => {
                        switch(key) {
                            case 'id':
                                return this.components.Input(key, value,
                                    'ID will be generated automatically', null, true);
                            case 'customerId':
                                return this.components.Input(key, value, this.data().customerId, null, true);
                            case 'billingId':
                                return this.components.Input(key, value, this.data().billingId, null, true);
                            case 'email':
                                return this.components.Input(key, value, this.computed.email(),
                                    this.computed.emails());
                            case 'dateOfCreation':
                                return this.components.Input(key, value, this.computed.getCurrentDate());
                            default:
                                return this.components.Input(key, value, '')
                        }
                    })
            },
            generateModifyForm: () => {
                return Object
                    .entries(this.data().types[this.data().currentTicket.type].availableParameters)
                    .map(([key, value]) => {
                        switch(key) {
                            case 'id':
                                return this.components.Input(key, value,
                                    'ID will be generated automatically', null, true);
                            case 'customerId':
                                return this.components.Input(key, value, this.data().currentTicket.customerId, null, true);
                            case 'billingId':
                                return this.components.Input(key, value, this.data().currentTicket.billingId, null, true);
                            case 'email':
                                return this.components.Input(key, value, this.data().currentTicket.email,
                                    this.computed.emails());
                            case 'dateOfCreation':
                                return this.components.Input(key, value, this.data().currentTicket.dateOfCreation);
                            default:
                                return this.components.Input(key, value, this.data().currentTicket[key])
                        }
                    })
            }
        };


        // subscribing some events that trigger some action with our component
        store.events.subscribe('setTicketToCreate', this.reload.bind(this));
        store.events.subscribe('addCpmTicket', this.reload.bind(this));
    }

    render() {

        //some actions that we call before rendering our template

        console.groupCollapsed('RENDER FORM');
        console.log(this.data().type)
        console.groupEnd()

        return this.compile(template.call(this));
    }
}
