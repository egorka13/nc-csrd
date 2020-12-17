import Component from '../../../../modules/component/component.js';
import store from '../../../../store/index.js';
import {template} from "./values.template.js";

export default class Value extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}