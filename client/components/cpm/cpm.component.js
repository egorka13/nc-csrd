import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./cpm.template.js";

export default class CPM extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        this.compile(template.call(this));

        let table = this.element.querySelector('.cpm-table');
        table.dispatchEvent(new CustomEvent('generate'));

        return this.element;
    }
}
