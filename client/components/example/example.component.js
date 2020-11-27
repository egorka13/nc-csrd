import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./example.temlate.js";

export default class Example extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
