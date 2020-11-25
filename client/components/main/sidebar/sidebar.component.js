/**
 * Created by vlados on 21.11.2020
 */
import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./sidebar.template.js";

export default class Sidebar extends Component {
    constructor(currentPage) {
        super({
            store,
            currentPage
        });
        this.methods = {
            goToOtherPage(event){
                let item = event.target.closest('.sidebar__menu-item');
                window.router.redirect('/' + item.dataset.name)
            }
        }
    }

    render() {
        return this.compile(template.call(this));
    }
}
