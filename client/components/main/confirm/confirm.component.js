/**
 * Created by vlados on 13.12.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./confirm.template.js";

export default class Confirm extends Component {
    constructor() {
        super({
            store
        }, {
            // components that we use as children of our component
        });

        this.data =  {
            text: () => store.state.confirm.text,
            isShow: () => store.state.confirm.isShow,
            action: () => store.state.confirm.action,
        };

        // methods that we can call or pass in the template
        this.methods = {
            show: () => {
                let element = this.element;
                element.querySelector('.confirm__text').textContent = this.data.text();
                element.classList.add('_show');
                setTimeout(function(){
                    element.classList.add('_visible');
                }, 0)
            },
            hide: () => {
                let element = this.element;
                element.querySelector('.confirm__text').textContent = this.data.text();
                element.classList.remove('_visible');
                setTimeout(function(){
                    element.classList.remove('_show');
                }, 400)
            },
            confirm: (event) => {
                store.events.publish(this.data.action(), event.target.dataset.value === 'true');
                this.methods.hide();
            },
        };

        // subscribing some events that trigger some action with our component
        store.events.subscribe('openConfirm', this.methods.show.bind(this))
    }

    render() {

        //some actions that we call before rendering our template

        return this.compile(template.call(this));
    }
}
