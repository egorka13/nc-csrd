import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./roe.template.js";

export default class Roe extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
