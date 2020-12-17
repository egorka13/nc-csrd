import {getDateFromISOString} from "../../../modules/date/date";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['filter-bar'],
        children: [
            ...this.data.filters.map(filter => {
                console.log(this.data.filters)
                return {
                    tagName: 'div',
                    classList: ['filter-bar__filter', 'input'],
                    attributes: {
                        'data-param': filter.minName
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
                                    classList: ['fas', 'fa-filter'],
                                }
                            ]
                        },
                        {
                            tagName: 'div',
                            classList: ['filter-bar__filter-title'],
                            textContent: filter.name
                        },
                        {
                            tagName: 'div',
                            classList: ['filter-bar__filter-title'],
                            children: [

                            ]
                        },

                        {
                            tagName: 'div',
                            classList: [
                                'filter-bar__dropdown',
                                'input__dropdown',
                                '_hidden',
                                filter.minName === 'dateOfCreation' || filter.minName === 'closingDate' ?
                                    '_date' : '_'
                            ],
                            children: [
                                {
                                    for: filter.items ? Object.entries(filter.items) : [],
                                    component: 'Checkbox',
                                    arguments: [
                                        filter.values ? `{{[${filter.values.map(str => '"' + str + '"').toString()}].indexOf(item[0]) !== -1}}` : false,
                                        '{{item[1]}}',
                                        filter.minName,
                                        '{{item[0]}}'
                                    ],
                                },
                                {
                                    if: filter.minName === 'dateOfCreation' || filter.minName === 'closingDate',
                                    tagName: 'div',
                                    classList: ['input__item', '_large', '_date'],
                                    attributes: {
                                        // 'data-name': sort.asc ? 'asc' : 'desc',
                                        // 'data-param': sort.minName
                                    },
                                    events: {
                                        // onclick: this.methods.setValue
                                    },
                                    children: [
                                        {
                                            component: 'DatePicker',
                                            arguments: [
                                                'Start',
                                                getDateFromISOString(this.computed.filters().datesOfCreation.begin),
                                                getDateFromISOString(new Date(2020, 10, 1)),
                                                getDateFromISOString(new Date()),
                                                this.methods.datePickerHandler(filter.minName, 0)
                                            ]
                                        }
                                    ]
                                },
                                {
                                    if: filter.minName === 'dateOfCreation' || filter.minName === 'closingDate',
                                    tagName: 'div',
                                    classList: ['input__item', '_large', '_date'],
                                    attributes: {
                                        // 'data-name': sort.asc ? 'asc' : 'desc',
                                        // 'data-param': sort.minName
                                    },
                                    events: {
                                        // onclick: this.methods.setValue
                                    },
                                    children: [
                                        {
                                            component: 'DatePicker',
                                            arguments: [
                                                'End',
                                                getDateFromISOString(this.computed.filters().closingDates.end),
                                                getDateFromISOString(new Date(2020, 10, 1)),
                                                getDateFromISOString(new Date()),
                                                this.methods.datePickerHandler(filter.minName, 1)
                                            ]
                                        }
                                    ]
                                },

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
