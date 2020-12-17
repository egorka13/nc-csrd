import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./roe-confirm-connection.template.js";

export default class RoeConfirmConnection extends Component {
    constructor(data) {
        // in data look for order (tariff/package)
        super({
            store,
            ...data,
        }, {
            // components that we use as children of our component
        });

        // variables that we can use in the template
        this.data = () => {
            return {}
        };

        // analogue of computed variables that we can use in the template
        this.computed = {}

        // methods that we can call or pass in the template
        this.methods = {};

        // subscribing some events that trigger some action with our component

        store.events.subscribe('roeConfirmConnection', (result) => {
            let order = this.props.order;
            let today = new Date();
            if (result){
                console.log('START');
                store.dispatch('roeAddOrder',{
                    ID: 'le34519n3x2',
                    Status: 'WAITING FOR PROVISIONING',
                    ...order,
                    Created: [today.getDate(), today.getMonth() + 1, today.getFullYear()].join('.')
                });
                console.log('END');
            }
            //let example = document.getElementsByClassName('roe-sales-order')[0];
            //result ? example.classList.remove('_hidden') : example.classList.add('_hidden');
        });

        store.events.subscribe('roeConnectionExample', (result) => {
            let example = document.getElementsByClassName('roe-sales-order')[0];
            result ? example.classList.remove('_hidden') : example.classList.add('_hidden');
        })

    }

    render() {

        //some actions that we call before rendering our template

        return this.compile(template.call(this));
    }
}
