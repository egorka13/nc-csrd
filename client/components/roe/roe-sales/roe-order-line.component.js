import Component from '../../../modules/component/component.js';
import store from '../../../store';
import {template} from './roe-order-line.template.js';

export default class RoeOrderLine extends Component {
    constructor(data) {
        //A line is needed
        super({
            store,
            ...data,
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
