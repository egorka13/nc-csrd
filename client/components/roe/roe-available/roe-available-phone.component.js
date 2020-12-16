import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from './roe-available-phone.template.js';

export default class RoePhone extends Component {
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
