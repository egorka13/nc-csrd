import Store from '../modules/store/store.js';
import {cpmStore} from "./cpm.js";
import {todoStore} from "./todo.js";
import {counterStore} from "./counter.js";
import {bimStore} from "./bim.js";

const state = {
    bim: bimStore.state,
    todo: todoStore.state,
    cpm: cpmStore.state,
    counter: counterStore.state,
    pages: [
        {
            minName: 'cim',
            name: 'Customer Info',
            fullName: 'Customer Information Management',
            active: false
        },
        {
            minName: 'cpm',
            name: 'Customer Problem',
            fullName: 'Customer Problem Management',
            active: true
        },
        {
            minName: 'roe',
            name: 'Order Entry',
            fullName: 'Residential Order Entry',
            active: false
        },
        {
            minName: 'bim',
            name: 'Billing Info',
            fullName: 'Billing Information Management',
            active: true
        },
    ]
};

export default new Store({
    state,
    actions: {
        // ...bimStore.actions,
        ...todoStore.actions,
        ...cpmStore.actions,
        ...counterStore.actions,
        goToOtherPage(context, payload){
            let activeListItem = document
                .querySelector('.sidebar__menu-item._active');
            activeListItem.classList.toggle('_active');
            let newListItem = document
                .querySelector(`.sidebar__menu-item[data-name=${payload}]`);
            newListItem.classList.toggle('_active');

            context.commit('goToOtherPage', payload);
        }
    },
    mutations: {
        // ...bimStore.mutations,
        ...todoStore.mutations,
        ...cpmStore.mutations,
        ...counterStore.mutations,
        goToOtherPage(state, payload){
            state.pages.find(page => page.active).active = false;
            state.pages.find(page => page.minName === payload).active = true;
            console.log(state);
            return state;
        }
    },
    getters: {
        // ...bimStore.getters,
        ...todoStore.getters,
        ...cpmStore.getters,
        ...counterStore.getters,
    }
});