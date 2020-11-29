export const template = function () {
    return {
        tagName: 'div',
        classList: ['cpm-table', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['cpm-table__title'],
                children: [
                    {
                        tagName: 'h2',
                        classList: ['cpm-table__title-name'],
                        textContent: 'List of tickets',
                    },
                    ...this.computed.showAll()
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm-table__list'],
                events: {
                    onclick: this.methods.changeCpmTicket
                },
                children: [
                    ...this.data().tickets.map(ticket => {
                        return this.components.Ticket(ticket)
                    }),
                    {
                        tagName: 'div',
                        classList: ['cpm-table__ticket_header'],
                        children: [
                            ...Object.values(this.data().params).map(value => {
                                return {
                                    tagName: 'div',
                                    classList: ['cpm-table__ticket-col', 'cpm-table__ticket-col_header'],
                                    textContent: value
                                }
                            })
                        ]
                    },
                ]
            },
        ]
    }
}

export const templateTitleAll = function () {

    return {
        tagName: 'div',
        classList: ['cpm-table__title-all'],
        textContent: 'Show all',
        events: {
            onclick: this.methods.clearFilters
        }
    }
}
