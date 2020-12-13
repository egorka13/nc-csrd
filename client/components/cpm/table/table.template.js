import store from "../../../store";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['cpm-table', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['cpm-table__header'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm-table__title'],
                        attributes: {
                            'data-name': 'tableTitle'
                        },
                        children: [
                            {
                                tagName: 'h2',
                                classList: ['cpm-table__title-name'],
                                textContent: 'List of tickets',
                            },
                            {
                                tagName: 'button',
                                classList: ['cpm-table__button', 'button', this.data().status !== 'show' ? '_hide' : '_'],
                                textContent: 'Add new ticket',
                                events: {
                                    onclick: this.methods.openCreateForm
                                }
                            },
                            {
                                if: this.computed.ticketFilters().active,
                                tagName: 'div',
                                classList: ['cpm-table__title-all'],
                                textContent: 'Clear filters',
                                events: {
                                    onclick: this.methods.clearFilters
                                }
                            }
                        ]
                    },
                    {
                        component: 'FilterTrigger'
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm-table__filter-bar'],
                attributes: {
                    'data-name': 'filterBar'
                },
                children: [
                    {
                        if: this.props.store.state.cpm.isFilterBar,
                        component: 'FilterBar'
                    },
                    {
                        if: this.props.store.state.cpm.isSortBar,
                        component: 'SortBar'
                    },
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm-table__list'],
                attributes:{
                    'data-name': 'tableList'
                },
                events: {
                    onclick: this.methods.changeCpmTicket
                },
                children: [
                    ...this.data().tickets.map(ticket => {
                        return {
                            component: 'Ticket',
                            arguments:  ticket.status === 'canceled' ? [
                                ticket,
                                this.methods.openModifyForm.bind(this),
                                this.methods.modifyTicket('active').bind(this),
                            ] : ticket.status === 'active' ? [
                                ticket,
                                this.methods.openModifyForm.bind(this),
                                null,
                                this.methods.modifyTicket('canceled').bind(this),
                            ] : [
                                ticket,
                                this.methods.openModifyForm.bind(this),
                            ]
                        }
                    }),
                    {
                        tagName: 'div',
                        classList: ['ticket__header'],
                        children: [
                            {
                                for: Object.entries(this.data().params),
                                tagName: 'div',
                                classList: [
                                    'ticket__col',
                                    'ticket__col_header',
                                    `{{item[0] === 'closingDate' || item[0] === 'dateOfCreation' ? '_partial' : 'none'}}`
                                ],
                                events: {
                                    onclick: this.methods.changeSort
                                },
                                attributes: {
                                    'data-name': '{{item[0]}}'
                                },
                                textContent: '{{item[1]}}',
                                children: [
                                    {
                                        if: `{{!${this.props.store.state.cpm.ticketSort.asc.toString()} && item[0] === '${this.props.store.state.cpm.ticketSort.param}'}}`,
                                        tagName: 'i',
                                        attributes: {
                                            style: 'margin-left: 3px;'
                                        },
                                        classList: ['fas', 'fa-caret-down'],
                                    },
                                    {
                                        if: `{{${this.props.store.state.cpm.ticketSort.asc.toString()} && item[0] === '${this.props.store.state.cpm.ticketSort.param}'}}`,
                                        tagName: 'i',
                                        attributes: {
                                            style: 'margin-left: 3px;'
                                        },
                                        classList: ['fas', 'fa-caret-up'],
                                    },
                                ]
                            },
                            {
                                tagName: 'div',
                                classList: ['ticket__col', 'ticket__dots', '_hidden'],
                            },
                        ]
                    },
                ]
            },
        ]
    }
}
