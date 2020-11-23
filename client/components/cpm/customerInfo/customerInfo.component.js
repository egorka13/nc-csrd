/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./customerInfo.template.js";

export default class CustomerInfo extends Component {
    constructor() {
        super({
            store
        });
        this.customers = [];
        this.methods = {
            getCustomers: () => {
                let self = this;
                const url = 'https://nc-csrd.firebaseio.com/customers.json';
                console.log('FETCH ' + url);
                fetch(url)
                    .then(function(response){
                        response.json().then(function(data){
                            self.customers = Object.entries(data).map(customerArray => {
                                let ticket = customerArray[1];
                                ticket['id'] = customerArray[0];
                                return ticket;
                            });
                            self.reload.call(self);
                            console.log(self.customers);
                        }, );
                    });
            }
        };
        store.events.subscribe('changeCpmTicket', this.reload.bind(this));
        store.events.subscribe('setCurrentTicket', this.reload.bind(this));
    }

    render() {
        if(!this.customers.length)
            this.methods.getCustomers();
        return this.compile(template.call(this));
    }
}
