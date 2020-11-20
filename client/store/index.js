import Store from '../modules/store/store.js';
import {cpmStore} from "./cpm.js";
import {todoStore} from "./todo.js";
import {counterStore} from "./counter.js";

const state = {
    todo: todoStore.state,
    cpm: cpmStore.state,
    counter: counterStore.state,
    pages: {
        cim: 'Customer Info',
        cpm: 'Customer Problem',
        roe: 'Order Entry',
        bim: 'Billing Accounts'
    }
};

export default new Store({
    state,
    actions: {
        ...todoStore.actions,
        ...cpmStore.actions,
        ...counterStore.actions
    },
    mutations: {
        ...todoStore.mutations,
        ...cpmStore.mutations,
        ...counterStore.mutations,
    },
    getters: {
        ...todoStore.getters,
        ...cpmStore.getters,
        ...counterStore.getters,
    }
});