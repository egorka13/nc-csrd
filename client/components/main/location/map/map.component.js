import Component from '../../../../modules/component/component.js';
import store from '../../../../store/index.js';
import {template} from "./map.template.js";

export default class Map extends Component {
    constructor() {
        super({
            store
        });
    }

    render() {
        return this.compile(template.call(this));
    }
}