import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from './main.template.js';
import CPM from "../cpm/cpm.component.js";
import Example from "../example/example.component.js";
import Counter from "../counter/counter.component.js";
import Todo from "../todo/todo.component.js";
import Roe from "../roe/roe.component";
import CIM from '../cim/main.component'

export default class App extends Component {
    constructor(data) {
        super({
            store,
            ...data
        });
        this.pagesComponents = {
            cpm: CPM,
            cim: CIM,
            roe: Roe,
            bim: Todo,
        };
    }

    render() {
        return this.compile(template.call(this));
    }
}
