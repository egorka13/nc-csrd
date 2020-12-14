import CPM from "../cpm/cpm.component.js";
// import BIM from "../bim/bim.component.js";
import Sidebar from "./sidebar/sidebar.component";

export const template = function(){
    let currentPage = this.props.store.state.pages.find(page => page.active);
    const pagesComponents = {
        cpm: CPM,
        cim: CPM,
        roe: CPM,
        bim: CPM,
    };
    return {
        tagName: 'div',
        classList: ['main'],
        children: [
            new Sidebar(currentPage).render(),
            {
                tagName: 'div',
                classList: ['main__page'],
                children: [
                    new pagesComponents[currentPage.minName]().render(),
                ]
            }
        ]
    }
}