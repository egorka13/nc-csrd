import 'regenerator-runtime/runtime';
import Router from './modules/router/router.js';
import Todo from "./components/todo/todo.component.js";
import Example from "./components/example/example.component.js";
import Item from "./components/todo/item/item.component.js";
import NotFound from "./components/notFound/notFound.component.js";
import Main from "./components/main/main.component.js";
import store from "./store/index.js";
import Counter from "./components/counter/counter.component.js";
import ConditionDemo from "./components/conditionDemo/conditionDemo.component";
import { Firebase } from "./modules/firebase";

const router = new Router('.app');

window.router = router;
window.store = store;
window.firebase = Firebase;

router
    .use('/', Main, { page: 'cim'})
    .use('/cpm', Main, { page: 'cpm'})
    .use('/cim', Main, { page: 'cim'})
    .use('/bim', Main, { page: 'bim'})
    .use('/roe', Main, { page: 'roe'})
    .use('/example', Example)
    .use('/todo', Todo)
    .use('/counter', Counter)
    .use('/item/:index', Item)
    .use('/404', NotFound)
    .use('/demo', ConditionDemo)
    .start();




