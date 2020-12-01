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
        });

        this.data = () => {
            return {
                status: store.state.cpm.status
            }
        };

        this.components = {
            Table: (...args) => new Table().render(...args),
            Info: (...args) => new Info().render(...args),
            Form: (...args) => new Form().render(...args),
        };

        this.methods = {
            openCreateForm: () => {
                this.element
                    .querySelector('.info')
                    .remove();
                this.element
                    .querySelector('.cpm__info')
                    .append(this.components.Form());
            },
            openInfo: () => {
                const info = this.element.querySelector('.info');

                if(!info){
                    this.element
                        .querySelector('.form')
                        .remove();
                    this.element
                        .querySelector('.cpm__info')
                        .append(this.components.Info());
                }
            }
        };

        store.events.subscribe('openCreateForm', this.methods.openCreateForm.bind(this));
        store.events.subscribe('openModifyForm', this.methods.openCreateForm.bind(this));
        store.events.subscribe('setCurrentCpmTicket', this.methods.openInfo.bind(this));
    }

    render() {
        return this.compile(template.call(this));
    }
}
