export const template = function () {
    return {
        tagName: 'div',
        classList: ['filter-bar', '_sort'],
        children: [
            ...this.data.sorts.map(sort => {
                return {
                    tagName: 'div',
                    classList: ['filter-bar__filter', 'input'],
                    attributes: {
                        'data-param': sort.minName
                    },
                    events: {
                        onclick: this.methods.openDropdown
                    },
                    children: [
                        {
                            tagName: 'div',
                            classList: ['filter-bar__filter-icon'],
                            children: [
                                {
                                    tagName: 'i',
                                    classList: ['fas', 'fa-sort-amount-up'],
                                }
                            ]
                        },
                        {
                            tagName: 'div',
                            classList: ['filter-bar__filter-title'],
                            textContent: sort.name
                        },
                        {
                            tagName: 'div',
                            classList: ['filter-bar__filter-title'],
                            children: [

                            ]
                        },

                        {
                            tagName: 'div',
                            classList: ['filter-bar__dropdown', 'input__dropdown', '_hidden'],
                            children: [
                                {
                                    tagName: 'div',
                                    classList: ['input__item', '_small'],
                                    attributes: {
                                        'data-name': sort.asc ? 'asc' : 'desc',
                                        'data-param': sort.minName
                                    },
                                    events: {
                                        onclick: this.methods.setValue
                                    },
                                    children: [
                                        {
                                            tagName: 'div',
                                            classList: ['input__item-text'],
                                            textContent: 'Ascending'
                                        }
                                    ]
                                },
                                {
                                    tagName: 'div',
                                    classList: ['input__item', '_small'],
                                    attributes: {
                                        'data-name': sort.sort,
                                        'data-param': sort.minName
                                    },
                                    events: {
                                        onclick: this.methods.setValue
                                    },
                                    children: [
                                        {
                                            tagName: 'div',
                                            classList: ['input__item-text'],
                                            textContent: 'Descending'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            tagName: 'button',
                            classList: ['filter-bar__closer', 'input__closer'],
                            events: {
                                onclick: this.methods.closeDropdown
                            },
                            children: [
                                {
                                    tagName: 'i',
                                    classList: ['fas', 'fa-times', 'input__icon'],
                                },
                            ]
                        },
                        {
                            tagName: 'button',
                            classList: ['filter-bar__button', 'input__button'],
                            events: {
                                // onclick: this.methods.openDropdown
                            },
                            children: [
                                {
                                    tagName: 'i',

                                    classList: ['fas', 'fa-chevron-down', 'input__icon'],
                                },
                            ]
                        }
                    ]
                }
            }),
            {
                tagName: 'div',
                classList: ['filter-bar__apply-container'],
                attributes: {
                    'data-name': 'apply'
                },
                children: [
                    {
                        if: this.data.isChanged,
                        tagName: 'div',
                        classList: ['filter-bar__apply-button'],
                        children: [
                            {
                                tagName: 'button',
                                classList: ['button', 'filter-bar__apply'],
                                textContent: 'Apply',
                                events: {
                                    onclick: this.methods.setFilters
                                }
                            },
                        ]
                    },
                ]
            },
        ]
    }
}
