import Component from '../../../../../modules/component/component.js';
import store from '../../../../../store/index.js';
import {template} from "./text.template.js";

export default class Text extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}