/**
 * Created by vlados on 09.12.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./datePicker.template.js";

export default class DatePicker extends Component {
    constructor(label, value, min, max, handler) {
        super({
            store,
            label,
            value,
            min,
            max,
            handler
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
