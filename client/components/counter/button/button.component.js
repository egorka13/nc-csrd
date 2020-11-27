/**
 * Created by vlados on 18.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./button.template.js";

export default class Button extends Component {
    constructor() {
        super({
            store
        });
        this.methods = {
            incrementValue(){
                store.dispatch('incrementValue');
            }
        }
    }

    render() {
        return this.compile(template.call(this));
    }
}
