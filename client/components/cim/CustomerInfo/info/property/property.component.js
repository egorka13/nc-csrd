import Component from '../../../../../modules/component/component.js';
import store from '../../../../../store/index.js';
import {template} from "./property.template.js";

export default class Property extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}