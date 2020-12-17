import Component from '../../../modules/component/component.js';
import store from '../../../store';
import {template} from './roe-available.template.js';

export default class RoeAvailable extends Component {
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
