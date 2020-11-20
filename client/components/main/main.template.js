import CPM from "../cpm/cpm.component.js";

export const template = function(){
    let pages = this.props.store.state.pages;

    const pagesComponents = {
        cpm: CPM
    };

    const listItems = Object.values(pages).map((page) => {
        let classActive = page === pages[this.props.page] ? ['_active'] : [];
        console.log(classActive)
        return {
            tagName: 'div',
            classList: ['sidebar__menu-item', ...classActive],
            children: [
                {
                    tagName: 'div',
                    classList: ['sidebar__menu-icon'],
                },
                {
                    tagName: 'div',
                    classList: ['sidebar__menu-title'],
                    textContent: page,
                },
            ]
        }
    });

    return {
        tagName: 'div',
        classList: ['main'],
        children: [
            {
                tagName: 'nav',
                classList: ['sidebar'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['sidebar__title'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['sidebar__logo'],
                            },
                            {
                                tagName: 'div',
                                classList: ['sidebar__title-name'],
                                textContent: 'CSRD'
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['sidebar__menu'],
                        children: listItems
                    },

                ]
            },
            {
                tagName: 'div',
                classList: ['main__page'],
                children: [
                    new pagesComponents[this.props.page]().render(),
                ]
            }
        ]
    }
}