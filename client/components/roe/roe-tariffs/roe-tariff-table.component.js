import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from './roe-tariff-table.template.js';

export default class RoeTariffTable extends Component {
    constructor(data) {
        super({
            store,
            ...data,
            //isConnected
            //addClassName
            //tariffs
            //parameters
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}