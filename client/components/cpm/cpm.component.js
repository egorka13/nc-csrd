import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from "./cpm.template.js";
import CpmTable from "./cpm-table/table.component.js";
import ProblemInfo from "./problemInfo/problemInfo.component";
import CustomerInfo from "./customerInfo/customerInfo.component";
import SelectForm from "./selectForm/selectForm.component";
import CreateForm from "./createForm/createForm.component";

export default class CPM extends Component {
    constructor(data) {
        super({
            store,
            data
        });
        this.components = {
            ProblemInfo: new ProblemInfo().render(),
            CpmTable: new CpmTable({isCustomer: this.props.data.isCustomer}).render(),
            CustomerInfo: new CustomerInfo().render(),
            SelectForm: new SelectForm().render(),
            CreateForm: new CreateForm().render(),
        };
    }

    render() {
        this.compile(template.call(this));

        return this.element;
    }
}
