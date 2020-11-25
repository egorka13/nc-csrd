import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./cpm.template.js";

export default class CPM extends Component {
    constructor(data) {
        super({
            store,
            data
        });

    }

    render() {
        this.compile(template.call(this));

        return this.element;
    }
}
