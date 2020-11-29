/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./info.template.js";

export default class Info extends Component {
    constructor() {
        super({
            store
        });

        // components that we use as children of our component
        this.components = {}

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
        this.methods = {};

        // subscribing some events that trigger some action with our component
        store.events.subscribe('setCurrentCpmTicket', this.reload.bind(this));
        store.events.subscribe('setCurrentTicket', this.reload.bind(this));
    }

    render() {

        console.groupCollapsed('RENDER Info');

        console.log(this.data());
        console.log(this.computed.params());

        console.groupEnd();

        return this.compile(template.call(this));
    }
}
