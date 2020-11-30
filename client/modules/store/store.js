import PubSub from '../pubsub/pubsub.js';

export default class Store {
    constructor(params) {
        console.log('STORE constructor')

        this.actions = {};
        this.mutations = {};
        this.state = {};
        this.getters = {};

        this.status = 'resting';

        this.events = new PubSub();

        if(params.hasOwnProperty('actions')) {
            this.actions = params.actions;
        }

        if(params.hasOwnProperty('mutations')) {
            this.mutations = params.mutations;
        }

        if(params.hasOwnProperty('getters')) {
            this.getters = params.getters;
        }

        this.state = new Proxy((params.state || {}), {
            set: function(state, key, value) {

                state[key] = value;

                console.groupCollapsed(`STATE was changed`);
                console.log(key + ':');
                console.log(value);
                console.groupEnd();
                this.status = 'resting';

                return true;
            }
        });
    }

    getter(getterKey, payload){
        if(typeof this.getters[getterKey] !== 'function') {
            console.error(`Getter "${getterKey} doesn't exist.`);
            return false;
        }

        console.groupCollapsed(`GETTER: ${getterKey}`);

        let data = this.getters[getterKey](this, payload);

        console.log(data);

        console.groupEnd();

        return data;
    }

    dispatch(actionKey, payload) {

        if(typeof this.actions[actionKey] !== 'function') {
            console.error(`Action "${actionKey} doesn't exist.`);
            return false;
        }

        console.groupCollapsed(`ACTION: ${actionKey}`);

        this.status = 'action';

        this.actions[actionKey](this, payload);

        console.groupEnd();

        return true;
    }

    commit(mutationKey, payload) {

        if(typeof this.mutations[mutationKey] !== 'function') {
            console.log(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }

        console.groupCollapsed(`MUTATION: ${mutationKey}`);

        this.status = 'mutation';

        let newState = this.mutations[mutationKey](this.state, payload);

        this.state = Object.assign(this.state, newState);

        this.events.publish(mutationKey, this.state);

        console.log('COMMIT this.events')
        console.log(this.events[mutationKey]);

        console.groupEnd();

        return true;
    }
}
