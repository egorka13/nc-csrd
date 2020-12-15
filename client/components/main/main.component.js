import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from './main.template.js';
import CPM from "../cpm/cpm.component.js";
import Example from "../example/example.component.js";
import Todo from "../todo/todo.component.js";
import Roe from "../roe/roe.component";
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
            cim: Example,
            roe: Roe,
            bim: Todo,
            confirmDemo: ConfirmDemo,
        };
    }

    render() {
        return this.compile(template.call(this));
    }
}
