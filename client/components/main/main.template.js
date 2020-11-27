import Sidebar from "./sidebar/sidebar.component";

export const template = function(){
    let currentPage = this.props.page;
    return {
        tagName: 'div',
        classList: ['main'],
        children: [
            new Sidebar(currentPage).render(),
            {
                tagName: 'div',
                classList: ['main__page'],
                children: [
                    new this.pagesComponents[currentPage]().render(),
                ]
            }
        ]
    }
}