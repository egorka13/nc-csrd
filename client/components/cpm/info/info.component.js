/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./info.template.js";
import Docs from "../docs/docs.component";
import {getCurrentDateString} from "../../../modules/date/date";

export default class Info extends Component {
    constructor() {
        super({
            store
        }, {
            Docs: (...args) => new Docs(...args).render(),
        });

        // variables that we can use in the template
        this.data = () => {
            return {
                currentTicket: store.getter('getCurrentTicket')
            }
        };

        // analogue of computed variables that we can use in the template
        this.computed = {
            params: () => {
                if (this.data().currentTicket) {
                    return store.state.cpm.ticketTypes[this.data().currentTicket.type]
                        .availableShowParameters
                }
                return {}
            }
        }

        // methods that we can call or pass in the template
        this.methods = {
            openModifyForm: () => {
                store.dispatch('openModifyForm');
            },
            modifyTicket: (status) => {
                return (event) => {
                    event.stopPropagation();

                    const ticket = this.data().currentTicket;
                    ticket.status = status;
                    if(status === 'canceled') {
                        ticket.closingDate = getCurrentDateString();
                    }
                    if(status === 'active') {
                        delete ticket.closingDate;
                    }

                    const url = `https://nc-csrd.firebaseio.com/problems/${ticket.id}.json`;
                    const config = {
                        method: 'PUT',
                        body: JSON.stringify(ticket)
                    };

                    fetch(url, config)
                        .then(function(response){
                            if(response.ok){
                                store.commit('addCpmTicket');
                                response.json().then(function(data){
                                    store.commit('setCurrentCpmTicket', ticket.id);
                                })
                            }
                        });

                    return false;
                }
            },
        };

        // subscribing some events that trigger some action with our component
        store.events.subscribe('setCurrentCpmTicket', this.reload.bind(this));
        store.events.subscribe('setInitialCpmCurrentTicket', this.reload.bind(this));
    }

    render() {

        console.groupCollapsed('RENDER Info');

        console.log(this.data());
        console.log(this.computed.params());

        console.groupEnd();

        return this.compile(template.call(this));
    }
}
