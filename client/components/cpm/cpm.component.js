import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./cpm.template.js";
import Table from "./table/table.component.js"
import Info from "./info/info.component.js"

export default class CPM extends Component {
    constructor() {
        super({
            store
        });
        this.components = {
            Table: (...args) => new Table().render(...args),
            Info: (...args) => new Info().render(...args),
        }
    }

    render() {
        return this.compile(template.call(this));
    }
}
