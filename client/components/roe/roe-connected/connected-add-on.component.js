import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from './connected-add-on.template.js';

export default class RoeConnectedAddons extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
