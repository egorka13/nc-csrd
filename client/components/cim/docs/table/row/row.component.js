import Component from '../../../../../modules/component/component.js';
import store from '../../../../../store/index.js';
import {template} from "./row.template.js";

export default class Row extends Component {
    constructor(row, flag) {
        super({
            store
        });
        this.row = row;
        this.flag = flag;
    }

    render() {
        return this.compile(template.call(this, this.row, this.flag));
    }
}