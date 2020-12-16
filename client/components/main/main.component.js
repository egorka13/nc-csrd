import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from './main.template.js';
import CPM from "../cpm/cpm.component.js";
import Example from "../example/example.component.js";
import Counter from "../counter/counter.component.js";
import BIM from "../bim/bim.component.js";
import Todo from "../todo/todo.component.js";
import Roe from "../roe/roe.component";
import CIM from '../cim/main.component'
import ConfirmDemo from "../confirmDemo/confirmDemo.component";
import Confirm from "./confirm/confirm.component";

export default class App extends Component {
    constructor(data) {
        super({
            store,
            ...data
        }, {
            Confirm: (...args) => new Confirm(...args).render(),
        });
        this.pagesComponents = {
            cpm: CPM,
            cim: CIM,
            roe: Roe,
            bim: BIM,
            confirmDemo: ConfirmDemo,
        };
    }

    render() {
        return this.compile(template.call(this));
    }
}
