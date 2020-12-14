/**
 * Created by vlados on 14.12.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./confirmDemo.template.js";

export default class confirmDemo extends Component {
    constructor() {
        super({
            store
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

    }

    render() {

        //some actions that we call before rendering our template

        return this.compile(template.call(this));
    }
}
