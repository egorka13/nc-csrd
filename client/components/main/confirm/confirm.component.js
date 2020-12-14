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
                this.element.querySelector('.confirm__text').textContent = this.data.text();
                this.element.classList.toggle('_show');
            },
            confirm: (event) => {
                store.events.publish(this.data.action(), event.target.dataset.value);
                this.methods.show();
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
