import Component from '../../../../modules/component/component.js';
import store from '../../../../store/index.js';
import {template} from "./defaultLocations.template.js";

export default class DefaultLocation extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}