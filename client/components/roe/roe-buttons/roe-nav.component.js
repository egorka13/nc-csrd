import Component from '../../../modules/component/component.js';
import store from '../../../store';
import {template} from './roe-nav.template.js';
import RoeNavButton from "./roe-nav-button.component";

export default class RoeNav extends Component {
    constructor(data) {
        super({
            store,
            ...data,
        },
        {
            RoeNavButton: (...args) => new RoeNavButton(...args).render()
        }
        );

        this.methods = {
            setTab: function(event) {
                let target = event.target;

                let navButtons = this.element.getElementsByClassName('roe-nav__item');
                for (let button of navButtons) {
                    button.classList.remove('_selected');
                }

                let availableContent = document.getElementsByClassName('roe-available-content__item');
                for (let item of availableContent) {
                    item.classList.add('_hidden');
                }

                store.dispatch('roeSetNavTab', {
                    newTab: target.textContent
                });

                target.classList.add('_selected');

                if (target.textContent === 'Tariffs') {
                    availableContent[0].classList.remove('_hidden');
                }
                if (target.textContent === 'Packages') {
                    availableContent[1].classList.remove('_hidden');
                }
            }
        }
    }


    render() {
        return this.compile(template.call(this));
    }
}
