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

        const element = this.compile(template.call(this))

        let map;

        function initMap() {
            map = new google.maps.Map(element.getElementsByClassName("location__map")[0], {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        }

        return element;
    }
}