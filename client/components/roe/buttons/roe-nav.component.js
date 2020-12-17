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
                console.dir(this);
                let target = event.target;
                let navButtons = this.element.getElementsByClassName('roe-nav__item');
                for (let button of navButtons) {
                    button.classList.remove('_selected');
                }
                let availableContent = document.getElementsByClassName('roe-available-content__item');
                for (let item of availableContent) {
                    item.classList.add('_hidden');
                    console.dir(item);
                }
                store.dispatch('roeSetNavTab', {
                    newTab: target.textContent
                });
                //this.props.store.state.roe.availableNav.currentTab = target.textContent;
                //TODO action and mutation;
                target.classList.add('_selected');
                if (target.textContent === 'Tariffs') {
                    availableContent[0].classList.remove('_hidden');
                }
                if (target.textContent === 'Packages') {
                    availableContent[1].classList.remove('_hidden');
                }
                // if (target.textContent === 'Phones') {
                //     availableContent[2].classList.remove('_hidden');
                // }
            }
        }
    }


    render() {
        return this.compile(template.call(this));
    }
}
