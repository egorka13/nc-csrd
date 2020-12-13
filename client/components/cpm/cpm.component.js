import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./cpm.template.js";
import Table from "./table/table.component.js"
import Info from "./info/info.component.js"
import Form from "./form/form.component.js"

export default class CPM extends Component {
    constructor() {
        super({
            store
        }, {
            Table: (...args) => new Table().render(...args),
            Info: (...args) => new Info().render(...args),
            Form: (...args) => new Form().render(...args),
        });

        this.data = () => {
            return {
                status: store.state.cpm.status
            }
        };

        this.methods = {
            openCreateForm: () => {
                this.reloadElement(template.call(this), 'cpmInfo');
            },
        };

        store.events.subscribe('openCreateForm', this.methods.openCreateForm.bind(this));
        store.events.subscribe('openModifyForm', this.methods.openCreateForm.bind(this));
        store.events.subscribe('setCurrentCpmTicket', this.methods.openCreateForm.bind(this));
    }

    render() {
        return this.compile(template.call(this));
    }
}
