import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from './roe-addon-type-button.template.js';

export default class RoeAddonTypeButtonComponent extends Component {
    constructor(data) {
        super({
            store,
            ...data,
        });

        this.methods = {
            showOfType(event) {
                let packageType = this.props.packageType[0];
                console.log(packageType);
                this.element.classList.toggle('_selected');
            }
        }
    }

    render() {
        return this.compile(template.call(this));
    }
}
