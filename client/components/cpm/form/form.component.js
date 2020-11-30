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
                types: store.state.cpm.ticketTypes
            }
        };

        // analogue of computed variables that we can use in the template
        this.computed = {}

        // methods that we can call or pass in the template
        this.methods = {};

        // subscribing some events that trigger some action with our component

    }

    render() {

        //some actions that we call before rendering our template

        return this.compile(template.call(this));
    }
}
