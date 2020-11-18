export const todoStore = {
    state: {

        //some data

        items: [
            'Привет',
            'Как дела',
            'Норм',
            'А ты как',
            'Тоже неплохо'
        ],
    },
    getters: {
        getItems(context, payload){

            //some filters and settings

            return context.state.todo.items;
        }
    },
    actions: {
        addItem(context, payload) {

            // some actions

            context.commit('addItem', payload);
        },
        clearItem(context, payload) {

            // some actions

            context.commit('clearItem', payload);
        },
    },
    mutations: {
        addItem(state, payload) {

            //rewrite state

            state.todo.items.push(payload);

            return state;
        },
        clearItem(state, payload) {

            // rewrite state

            state.todo.items.splice(state.todo.items.indexOf(payload.text), 1);

            return state;
        },
    }
}