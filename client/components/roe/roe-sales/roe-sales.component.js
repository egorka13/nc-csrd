import Component from '../../../modules/component/component.js';
import store from '../../../store';
import {template} from './roe-sales.template.js';

export default class RoeSales extends Component {
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
