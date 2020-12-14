import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from './roe-available-tariff.template.js';

export default class RoeConnectedTariff extends Component {
    constructor(data) {
        super({
            store,
            ...data,
            //tariff
            //parameters
            //addClassName
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
