import store from "../../../store";

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
                                children: [
                                    {
                                        tagName: 'div',
                                        classList:
                                            param === 'status' ?
                                            ['cpm-table__ticket-text', '_status'] :
                                            param === 'type' ?
                                            ['cpm-table__ticket-text', '_type']:
                                            ['cpm-table__ticket-text'],
                                        textContent: ticket[param],
                                        children: [

                                        ]
                                    }
                                ]
                            }})
                        ]
                    }}),
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