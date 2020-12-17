import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from './roe-nav-button.template.js';

export default class RoeNavButton extends Component {
    constructor(data, buttonName) {
        super({
            store,
            ...data,
            buttonName: buttonName,
        },);
    }

    render() {
        return this.compile(template.call(this));
    }
}
