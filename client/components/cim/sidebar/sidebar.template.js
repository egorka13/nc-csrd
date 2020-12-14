export const template = function () {
    let pages = this.props.store.state.pages;

    const listItems = Object.values(pages).map((page) => {
        let classActive = page.minName === this.props.currentPage
                            ? ['_active'] : [];
        return {
            tagName: 'div',
            classList: ['sidebar__menu-item', ...classActive],
            attributes: {
                'data-name': page.minName
            },
            children: [
                {
                    tagName: 'div',
                    classList: ['sidebar__menu-icon'],
                },
                {
                    tagName: 'div',
                    classList: ['sidebar__menu-title'],
                    textContent: page.name,
                },
            ]
        }
    });

    return {
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
                events: {
                    onclick: this.methods.goToOtherPage
                },
                children: listItems
            },

        ]
    }
}