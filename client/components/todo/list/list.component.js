import Component from '../../../modules/component/component.js';
import {listTemplate} from "./list.template.js";
import store from '../../../store';

export default class List extends Component {
    constructor() {
        super({store});
        this.state = {}
        this.methods = {
            addItem: function(){
                let input = document.querySelector('.list__input');
                store.commit('addItem', input.value);
            },
            clearItem: function(event){
                store.dispatch('clearItem', event.target.previousElementSibling.textContent);
            }
        }
        store.events.subscribe('addItem', this.reload.bind(this));
        store.events.subscribe('clearItem', this.reload.bind(this));
    }

    render() {
        console.log(store.getter('getItems'))
        return this.compile(listTemplate.call(this));
    }
}
