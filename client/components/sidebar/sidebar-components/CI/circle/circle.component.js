import Component from '../../../../../modules/component/component.js';
import store from '../../../../../store/index.js';
import {template} from "./circle.template.js";

export default class CI extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}