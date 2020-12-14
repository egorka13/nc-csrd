import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./roe-connected-addon.template.js";

export default class RoeConnectedAddon extends Component {
    constructor(data) {
        super({
            store,
            ...data,
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}