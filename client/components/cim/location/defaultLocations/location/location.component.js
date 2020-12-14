import Component from '../../../../../modules/component/component.js';
import store from '../../../../../store/index.js';
import {template} from "./location.template.js";

export default class Location extends Component {
    constructor(loc, index) {
        super({
            store
        });
        this.loc = loc;
        this.index = index;
    }

    render() {
        return this.compile(template.call(this, this.loc, this.index));
    }
}