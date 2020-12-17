import Component from '../../../modules/component/component.js';
import store from '../../../store';
import {template} from './roe-sales-order.template.js';

export default class RoeSalesOrder extends Component {
    constructor(data) {
        //Order is needed
        super({
            store,
            ...data,
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
