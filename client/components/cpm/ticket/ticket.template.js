export const template = function () {
    let ticket = this.props.ticket;
    let statuses = this.props.store.state.cpm.ticketStatuses;
    let types = this.props.store.state.cpm.ticketTypes;
    return {
        tagName: 'div',
        classList: ['cpm-table__ticket'],
        children: [
            {
                tagName: 'div',
                classList: ['cpm-table__ticket-col'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm-table__ticket-text'],
                        textContent: ticket.comment,
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
                            style: `background: ${types[ticket.type].color}`
                        },
                        textContent: ticket.type,
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
                        textContent: ticket.dateOfCreation,
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
                        textContent: ticket.closingDate !== '' ? ticket.closingDate : '---',
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
                            style: `background: ${statuses[ticket.status].color}`
                        },
                        textContent: ticket.status,
                    }
                ]
            },
        ]
    }
}

function chooseStatusColor(status){

}