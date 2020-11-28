/**
 * Created by vlados on 25.11.2020
 */
import Component from '../../../../modules/component/component.js';
import store from '../../../../store/index.js';
import {template} from "./search.template.js";
import {itemTemplate} from "./search.template.js";

export default class Search extends Component {
    constructor() {
        super({
            store
        });
        this.methods = {
            getCustomers: () => {
                let self = this;
                const url = 'https://nc-csrd.firebaseio.com/customers.json';
                console.log('FETCH ' + url);
                let button = document.querySelector('.search .input__button'),
                    loader = document.querySelector('.search .input__loader'),
                    closer = document.querySelector('.search .input__closer');
                button.style.display = 'none';
                loader.style.display = 'block';
                fetch(url)
                    .then(function(response){
                        response.json().then(function(data){
                            let customers = Object.entries(data).map(customerArray => {
                                let ticket = customerArray[1];
                                ticket['id'] = customerArray[0];
                                return ticket;
                            });
                            self.customers = customers;
                            let dropdown = document.querySelector('.search .input__dropdown');
                            dropdown.innerHTML = '';
                            customers.forEach(customer => {
                                dropdown.append(self.compile(itemTemplate.call(self,
                                    `${customer.surname} ${customer.name} ${customer.patronymic}`,
                                    customer.phone, customer.id)));
                            })
                            dropdown.style.display = 'block';
                            dropdown.classList.add('_show');
                            closer.style.display = 'flex';
                            loader.style.display = 'none';
                        });
                    });

            },
            setCustomer: (event) => {
                let id = event.target
                    .closest('.input__item')
                    .dataset.id;
                let customer = this.customers.find(customer => customer.id === id);

                if(!store.state.cpm.isCustomerSelected) {
                    store.state.cpm.isCustomerSelected = true;
                }

                store.dispatch('setCpmCurrentCustomer', customer);
                this.methods.closeDropdown();
            },
            closeDropdown: () => {
                let dropdown = document.querySelector('.search .input__dropdown');
                let button = document.querySelector('.search .input__button');
                let closer = document.querySelector('.search .input__closer');
                closer.style.display = 'none';
                button.style.display = 'flex';
                dropdown.classList.remove('_show');

            }
        };
    }

    render() {
        return this.compile(template.call(this));
    }
}
