import Ticket from "../ticket/ticket.component";

export const template = function(){
    let tickets = this.props.store.getter('getCpmTickets');
    let params = this.props.store.state.cpm.ticketTableParams;
    return {
        tagName: 'div',
        classList: ['cpm-table',  'card'],
        children: [
            {
                tagName: 'h2',
                classList: ['cpm-table__title'],
                textContent: 'List of tickets'
            },
            {
                tagName: 'div',
                classList: ['cpm-table__list'],
                events: {
                    onclick: this.methods.changeCpmTicket
                },
                children: [
                    ...tickets.map(ticket => { return new Ticket(ticket).render()}),
                    {
                        tagName: 'div',
                        classList: ['cpm-table__ticket_header'],
                        children: [
                            ...Object.values(params).map(value => { return {
                                tagName: 'div',
                                classList: ['cpm-table__ticket-col', 'cpm-table__ticket-col_header'],
                                textContent: value
                            }})
                        ]
                    },
                ]
            },
        ]
    }
}