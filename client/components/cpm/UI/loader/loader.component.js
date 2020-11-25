/**
 * Created by vlados on 25.11.2020
 */
import Component from '../../../../modules/component/component.js';
import store from '../../../../store/index.js';
import {template} from "./loader.template.js";

export default class Loader extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}
