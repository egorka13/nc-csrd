import Store from '../modules/store/store.js';
import {cpmStore} from "./cpm.js";
import {todoStore} from "./todo.js";
import {counterStore} from "./counter.js";
import {bimStore} from "./bim.js";
import {roeStore} from "./roe.js";

const state = {
    bim: bimStore.state,
    todo: todoStore.state,
    cpm: cpmStore.state,
    counter: counterStore.state,
    roe: roeStore.state,
    pages: [
        {
            minName: 'cim',
            name: 'Customer Info',
            fullName: 'Customer Information Management',
            active: true
        },
        {
            minName: 'cpm',
            name: 'Customer Problem',
            fullName: 'Customer Problem Management',
            active: false
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
        ...roeStore.actions,
        goToOtherPage(context, payload){
            let activeListItem = document
                .querySelector('.sidebar__menu-item._active');
            activeListItem.classList.toggle('_active');
            let newListItem = document
                .querySelector(`.sidebar__menu-item[data-name=${payload}]`);
            newListItem.classList.toggle('_active');

            history.pushState(null, null, '/' + payload);

            context.commit('goToOtherPage', payload);
        }
    },
    mutations: {
        // ...bimStore.mutations,
        ...todoStore.mutations,
        ...cpmStore.mutations,
        ...counterStore.mutations,
        ...roeStore.mutations,
        goToOtherPage(state, payload){
            let activePage = state.pages.find(page => page.active);
            if(activePage) {
                activePage.active = false;
            }
            else {
                console.log('Attention: Incorrect payload');
            }

            let newPage = state.pages.find(page => page.minName === payload);
            if(newPage) {
                newPage.active = true;
            }
            else {
                console.log('Attention x2: Incorrect payload')
            }

            return state;
        }
    },
    getters: {
        // ...bimStore.getters,
        ...todoStore.getters,
        ...cpmStore.getters,
        ...counterStore.getters,
        ...roeStore.getters,
    }
});