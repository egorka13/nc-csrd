import Component from '../../../../modules/component/component.js';
import store from '../../../../store/index.js';
import {template} from "./info.template.js";

export default class Info extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}