/**
 * Created by vlados on 07.12.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./checkbox.template.js";

export default class Checkbox extends Component {
    constructor(isChecked, label, param, value, isRadio = false) {
        super({
            store,
        }, {
            // components that we use as children of our component
        });

        this.isChecked = isChecked;
        this.label = label;
        this.param = param;
        this.value = value;

        // variables that we can use in the template
        this.data = () => {
            return {}
        };

        // analogue of computed variables that we can use in the template
        this.computed = {}

        // methods that we can call or pass in the template
        this.methods = {
            onCheck: (event) => {
                const input = event.target;
                const checkbox = event.target.closest('.checkbox');
                store.events.publish('check', {
                    checked: input.checked,
                    param: checkbox.dataset.param,
                    value: checkbox.dataset.value,
                })
            }
        };

        // subscribing some events that trigger some action with our component

    }

    render() {

        //some actions that we call before rendering our template

        return this.compile(template.call(this));
    }
}
