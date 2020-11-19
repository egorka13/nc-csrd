export const counterStore = {
    state: {
        value: 0
    },
    getters: {
        getValue(context, payload) {

            //some filters and settings

            return context.state.counter.value;
        }
    },
    actions: {
        incrementValue(context, payload) {

            //some action

            context.commit('incrementValue', payload);
        },
    },
    mutations: {
        incrementValue(state, payload) {

            //rewrite state

            state.counter.value++;

            return state;
        },
    }
}