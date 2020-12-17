import 'regenerator-runtime/runtime';
import Router from './modules/router/router.js';
import Todo from "./components/todo/todo.component.js";
import Example from "./components/example/example.component.js";
import Item from "./components/todo/item/item.component.js";
import NotFound from "./components/notFound/notFound.component.js";
import Main from "./components/main/main.component.js";
import store from "./store/index.js";
import firebase from "firebase/app";
import Counter from "./components/counter/counter.component.js";
import ConditionDemo from "./components/conditionDemo/conditionDemo.component";
import CIM from "./components/cim/main.component"
//import {Loader} from "@googlemaps/js-api-loader";

const firebaseConfig = {
    apiKey: "AIzaSyAmQWUlaXrqQWOwy2Q0_qRtWFJQhlCGOg0",
    authDomain: "nc-csrd.firebaseapp.com",
    databaseURL: "https://nc-csrd.firebaseio.com",
    projectId: "nc-csrd",
    storageBucket: "nc-csrd.appspot.com",
    messagingSenderId: "891812689175",
    appId: "1:891812689175:web:f648d5b86f372137db7352"
};

firebase.initializeApp(firebaseConfig);

const router = new Router('.app');

window.router = router;
window.store = store;

//@googlemaps/js-api-loader


router
    .use('/', Main, { page: 'cim'})
    .use('/cpm', Main, { page: 'cpm'})
    .use('/cim', Main, { page: 'cim'})
    .use('/bim', Main, { page: 'bim'})
    .use('/roe', Main, { page: 'roe'})
    .use('/confirm-demo', Main, { page: 'confirmDemo'})
    .use('/example', Example)
    .use('/todo', Todo)
    .use('/counter', Counter)
    .use('/item/:index', Item)
    .use('/404', NotFound)
    .use('/demo', ConditionDemo)
    .start();