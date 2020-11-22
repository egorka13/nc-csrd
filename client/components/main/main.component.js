import Component from '../../modules/component/component.js';
import store from '../../store/index.js';
import {template} from './main.template.js';
import CPM from "../cpm/cpm.component.js";
import Example from "../example/example.component.js";
import Counter from "../counter/counter.component.js";
import Todo from "../todo/todo.component.js";

export default class App extends Component {
    constructor(data) {
        super({
            store,
            ...data
        });
        this.pagesComponents = {
            cpm: CPM,
            cim: Example,
            roe: Counter,
            bim: Todo,
        };
        this.methods = {
            changePage(){
                let mainPage = document.querySelector('.main__page');
                mainPage.innerHTML = "";
                mainPage.append(
                    new this.pagesComponents[store.state.pages
                        .find(page => page.active).minName]()
                        .render());
            }
        };
        store.events.subscribe('goToOtherPage', this.methods.changePage.bind(this));
    }

    render() {
        return this.compile(template.call(this));
    }
}
