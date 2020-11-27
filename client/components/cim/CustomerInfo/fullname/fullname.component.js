import Component from '../../../../modules/component/component.js';
import store from '../../../../store/index.js';
import {template} from "./fullname.template.js";

export default class Fullname extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}