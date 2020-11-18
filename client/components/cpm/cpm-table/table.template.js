import store from "../../../store";

export const template = function(){
    let tickets = this.props.store.getter('getCpmTickets');
    let params = this.props.store.state.cpm.ticketTypes.example.availableParameters;
    return {
        tagName: 'div',
        classList: ['cpm-table'],
        children: [
            {
                tagName: 'h2',
                classList: ['cpm-table__title'],
                textContent: 'List of tickets'
            },
            // {
            //     tagName: 'h3',
            //     classList: ['cpm-table__title'],
            //     textContent: JSON.stringify(tickets)
            // },
            {
                tagName: 'div',
                classList: ['cpm-table__list'],
                children: [
                    ...tickets.map(ticket => { return {
                        tagName: 'div',
                        classList: ['cpm-table__ticket'],
                        children: [
                            ...Object.keys(params).map(param => {
                                return {
                                tagName: 'div',
                                classList: ['cpm-table__ticket-col'],
                                textContent: ticket[param]
                            }})
                        ]
                    }}),
                    {
                        tagName: 'div',
                        classList: ['cpm-table__ticket', 'cpm-table__ticket_header'],
                        children: [
                            ...Object.values(params).map(value => { return {
                                tagName: 'div',
                                classList: ['cpm-table__ticket-col'],
                                textContent: value
                            }})
                        ]
                    },
                ]
            },
        ]
    }
}