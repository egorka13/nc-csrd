import Component from '../../../modules/component/component.js';
import store from '../../../store';
import {template} from './roe-connected-addons.template.js';

export default class RoeConnectedAddons extends Component {
    constructor(data) {
        super({
            store,
            ...data,
        });

        this.methods = {
            fog: function () {
                let elem = this.element;
                let content = elem.firstElementChild;
                let scrollRatio = elem.clientWidth / (content.scrollWidth - content.scrollLeft);
                if (elem.classList.contains('_showFog') && scrollRatio > 0.9) {
                    elem.classList.remove('_showFog');
                }
                if (!elem.classList.contains('_showFog') && scrollRatio <= 0.9) {
                    elem.classList.add('_showFog');
                }
                //console.dir(scrollRatio);
            }
        }
    }

    render() {
        return this.compile(template.call(this));
    }
}
