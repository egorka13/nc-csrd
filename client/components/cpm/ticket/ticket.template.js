export const template = function () {
    let ticket = this.props.ticket;
    return {
        tagName: 'div',
        classList: ['cpm-table__ticket'],
        attributes: {
            'data-ticket': ticket.id
        },
        children: [
            {
                tagName: 'div',
                classList: ['cpm-table__ticket-col'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm-table__ticket-text'],
                        textContent: ticket.comment ? ticket.comment : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm-table__ticket-col'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['cpm-table__ticket-text', '_type'],
                        attributes: {
                            style: `background: ${this.methods.getTypeColor(ticket.type)}`
                        },
                        events: {
                            onclick: this.methods.filterByType.bind(this)
                        },
                        textContent: ticket.type ? ticket.type : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm-table__ticket-col'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm-table__ticket-text'],
                        textContent: ticket.dateOfCreation ? ticket.dateOfCreation : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm-table__ticket-col'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm-table__ticket-text'],
                        textContent: ticket.closingDate ? ticket.closingDate : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm-table__ticket-col'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['cpm-table__ticket-text', '_status'],
                        attributes: {
                            style: `background: ${this.methods.getStatusColor(ticket.status)}`
                        },
                        events: {
                            onclick: this.methods.filterByStatus.bind(this)
                        },
                        textContent: ticket.status ? ticket.status : '---',
                    }
                ]
            },
        ]
    }
}
