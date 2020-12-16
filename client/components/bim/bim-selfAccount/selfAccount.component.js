import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./selfAccount.template.js";

export default class SelfTable extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}