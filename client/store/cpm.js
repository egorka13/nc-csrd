export const cpmStore = {
    state: {
        tickets: [],
        ticketTypes: {
            example: {
                availableParameters: {
                    comment: 'Comment',
                    dateOfCreation: 'Date of creation',
                    type: 'Type',
                    status: 'Status',
                    closingDate: 'Closing date'
                }
            },
            support: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            security: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    email: 'Customer email',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            billing: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            sale: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            generic: {
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            }
        },
        ticketStatuses: [
            'active',
            'canceled',
            'executing',
            'done',
            'notDone',
        ],
        ticketsByCustomers: {
            dateOfCreation: 'Date of creation',
            type: 'Ticket type',
            status: 'Ticket status',
            closingDate: 'Closing date',
        },
        sortTicketsByCustomersParameters: {
            dateOfCreation: 'Date of creations',
            closingDate: 'Closing date'
        },
        sortTicketsParameters: {
            type: 'Ticket type',
            dateOfCreation: 'Date of creations',
            closingDate: 'Closing date',
            status: 'Ticket status'
        },
    },
    getters: {
        getCpmTickets(context, payload){
            if(!context.state.cpm.tickets.length)
                context.dispatch('loadCpmTickets');

            console.log('GETTER RETURNS')
            console.log(context.state.cpm.tickets)
            return context.state.cpm.tickets;
        }
    },
    actions: {
        async loadCpmTickets(context, payload){
            console.groupCollapsed('FETCH GET /problems.json');
            let tickets = await getCpmTickets();
            console.log(tickets);
            console.groupEnd();
            context.commit('loadCpmTickets', tickets);
        },
        async addCpmTicket(context, payload) {
            console.groupCollapsed('FETCH POST /problems.json');

            let response = await postCpmTicket(payload)

            if (!response.ok) {
                console.log('FAILED');
                return;
            }

            let tickets = await getCpmTickets();

            console.groupEnd();
            context.commit('loadCpmTickets', tickets);
        },
        clearCpmTicket(context, payload) {
            context.commit('clearCpmTicket', payload);
        },
    },
    mutations: {
        loadCpmTickets(state, payload){
            state.cpm.tickets = payload;

            return state;
        },
        addCpmTicket(state, payload) {
            payload.id = state.todo.items.length + 1;
            state.cpm.tickets.push(payload);

            return state;
        },
        clearCpmTicket(state, payload) {
            state.cpm.tickets.splice(state.todo.items.indexOf(payload.text), 1);

            return state;
        },
    },
}

async function getCpmTickets(){
    const url = 'https://nc-csrd.firebaseio.com/problems.json';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return Object.entries(data).map(ticketArray => {
        let ticket = ticketArray[1];
        ticket['id'] = ticketArray[0];
        return ticket;
    });
}

async function postCpmTicket(payload){
    const url = 'https://nc-csrd.firebaseio.com/problems.json';
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload)
    });
    console.log(response);
    return response;
}