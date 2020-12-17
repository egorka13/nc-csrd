export const template = function () {
    return {
        tagName: 'div',
        classList: ['filter-trigger'],
        children: [
            {
                tagName: 'div',
                classList: ['filter-trigger__button', '_sort'],
                events: {
                    onclick: this.methods.toggleSortBar
                },
                children: [
                    {
                        tagName: 'div',
                        classList: ['filter-trigger__icon'],
                        children: [
                            {
                                tagName: 'i',
                                classList: ['fas', 'fa-sort-amount-up'],
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['filter-trigger__title'],
                        textContent: 'Sort',
                    },
                ]
            },
            {
                tagName: 'div',
                classList: ['filter-trigger__button', '_filter'],
                events: {
                    onclick: this.methods.toggleFilterBar
                },
                children: [
                    {
                        tagName: 'div',
                        classList: ['filter-trigger__icon'],
                        children: [
                            {
                                tagName: 'i',
                                classList: ['fas', 'fa-filter'],
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['filter-trigger__title'],
                        textContent: 'Filter'
                    },
                ]
            },
        ]
    }
}