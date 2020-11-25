import Ticket from "../ticket/ticket.component";

export const template = function(){
    let tickets = [];
    if(this.props.store.state.cpm.currentCustomer)
        tickets = this.props.store.getter('getCpmTicketsByUser');
    else if (!this.props.data.isCustomer){
        if(this.props.store.state.cpm.isFilter)
            tickets = this.props.store.getter('getCpmFilteredTickets');
        else
            tickets = this.props.store.getter('getCpmTickets');
    }

    let params = this.props.store.state.cpm.ticketTableParams;

    let showAll = this.props.store.state.cpm.isFilter ? [{
        tagName: 'div',
        classList: ['cpm-table__title-all'],
        textContent: 'Show all',
        events: {
            onclick: this.methods.clearFilters
        }
    }] : [];

    return {
        tagName: 'div',
        classList: ['cpm-table',  'card'],
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
                    ...showAll
                ]
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