import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./connected-tariff.template.js";

export default class RoeConnectedTariff extends Component {
    constructor() {
        super({
            store,
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
