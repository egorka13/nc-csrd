import 'regenerator-runtime/runtime';
import Router from './modules/router/router.js';
import Example from "./components/example/example.component.js";
import Item from "./components/todo/item/item.component.js";
import NotFound from "./components/notFound/notFound.component.js";
import Main from "./components/main/main.component.js";
import store from "./store/index.js";
import Counter from "./components/counter/counter.component.js";
import BIM from "./components/bim/bim.component.js";
import ConditionDemo from "./components/conditionDemo/conditionDemo.component";
import { Firebase } from "./modules/firebase";
import CIM from "./components/cim/main.component"
//import {Loader} from "@googlemaps/js-api-loader";

const router = new Router('.app');

window.router = router;
window.store = store;
window.firebase = Firebase;

//@googlemaps/js-api-loader


router
    .use('/', Main, { page: 'cim'})
    .use('/cpm', Main, { page: 'cpm'})
    .use('/cim', Main, { page: 'cim'})
    .use('/bim', Main, { page: 'bim'})
    .use('/roe', Main, { page: 'roe'})
    .use('/confirm-demo', Main, { page: 'confirmDemo'})
    .use('/example', Example)
    .use('/BIM', BIM)
    .use('/counter', Counter)
    .use('/item/:index', Item)
    .use('/404', NotFound)
    .use('/demo', ConditionDemo)
    .start();