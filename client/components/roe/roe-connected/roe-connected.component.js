import Component from '../../../modules/component/component.js';
import store from '../../../store';
import {template} from './roe-connected.template.js';

export default class RoeConnected extends Component {
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
