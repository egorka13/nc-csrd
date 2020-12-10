import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from './roe-tariffs.template.js';

export default class RoeTariffs extends Component {
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
