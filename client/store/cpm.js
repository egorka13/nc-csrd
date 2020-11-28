export const cpmStore = {
    state: {
        tickets: [],
        isFilter: false,
        filterParams: {},
        isCustomerSelected: false,
        ticketTableParams: {
            comment: 'Comment',
            type: 'Type',
            dateOfCreation: 'Creation date',
            closingDate: 'Closing date',
            status: 'Status',
        },
        ticketTypes: {
            support: {
                name: 'Support',
                color: '#47DDCC',
                fullName: 'Customer support',
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            security: {
                name: 'Security',
                fullName: 'Security',
                color: '#964FFF',
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    email: 'Customer email',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            billing: {
                name: 'Billing',
                fullName: 'Billing',
                color: '#0F5BFF',
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            order: {
                name: 'Sales order',
                fullName: 'Order',
                color: '#FA394E',
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            },
            generic: {
                name: 'Generic',
                fullName: 'Generic',
                color: '#EA87FF',
                availableParameters: {
                    id: 'Ticket id',
                    accountId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    currentDate: 'Current date',
                }
            }
        },
        ticketStatuses: {
            active: {
                name: 'Active',
                color: '#5EAAF8'
            },
            canceled: {
                name: 'Canceled',
                color: '#999999'
            },
            executing: {
                name: 'Executing',
                color: '#FFC102'
            },
            done: {
                name: 'Done',
                color: '#47DDCC'
            },
            notDone: {
                name: 'Not done',
                color: '#FA394E'
            },
        },
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
        getCurrentTicket(context, payload){
            return context.state.cpm.currentTicket;
        },
        getCurrentCustomer(context, payload){
            return context.state.cpm.currentCustomer;
        },
        getCpmTickets(context, payload){
            if(!context.state.cpm.tickets.length)
                context.dispatch('loadCpmTickets');

            console.log('GETTER RETURNS')
            console.log(context.state.cpm.tickets)
            return context.state.cpm.tickets;
        },
        getCpmTicketsByUser(context, payload){
            if(!context.state.cpm.tickets.length)
                context.dispatch('loadCpmTickets');

            return context.state.cpm.tickets.filter(ticket =>
                ticket.customerId === context.state.cpm.currentCustomer.id);
        },
        // getCpmFilteredTickets(context, payload){
        //     return context.state.cpm.tickets
        //         .filter(ticket => ticket[context.state.cpm.filterParams.key] === context.state.cpm.filterParams.value);
        // },
    },
    actions: {
        async loadCpmTickets(context, payload){
            console.groupCollapsed('FETCH GET /problems.json');
            let tickets = await getCpmTickets();
            console.log(tickets);
            console.groupEnd();
            context.commit('loadCpmTickets', tickets);
            context.commit('setCurrentTicket');
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
        async updateCpmTicket(context, payload) {
            console.groupCollapsed('FETCH PUT /problems.json');

            let response = await putCpmTicket(payload)

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
        changeCpmTicket(context, payload){
            context.commit('changeCpmTicket', payload);
        },
        filterCpmTickets(context, payload){
            context.commit('filterCpmTickets', payload);
        },
        setCpmCurrentCustomer(context, payload){
            context.commit('setCpmCurrentCustomer', payload);
        },
    },
    mutations: {
        setCurrentTicket(state, payload){
            console.log(state.cpm.tickets[state.cpm.tickets.length - 1]);
            state.cpm.currentTicket = state.cpm.tickets[state.cpm.tickets.length - 1];

            return state;
        },
        loadCpmTickets(state, payload){
            state.cpm.tickets = payload;
            state.cpm.isFilter = false;

            return state;
        },
        addCpmTicket(state, payload) {
            state.cpm.tickets.push(payload);

            return state;
        },
        updateCpmTicket(state, payload) {
            state.cpm.tickets = [];

            return state;
        },
        clearCpmTicket(state, payload) {
            state.cpm.tickets.splice(state.todo.items.indexOf(payload.text), 1);

            return state;
        },
        changeCpmTicket(state, payload){
            console.log(payload);
            state.cpm.currentTicket = state.cpm.tickets.find(ticket => ticket.id === payload);
            console.log(state.cpm.currentTicket)
            return state;
        },
        filterCpmTickets(state, payload){
            state.cpm.isFilter = true;

            state.cpm.tickets = state.cpm.tickets
                .filter(ticket => ticket[payload.key] === payload.value);

            return state;
        },
        setCpmCurrentCustomer(state, payload){
            state.cpm.currentCustomer = payload;

            return state;
        }
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

async function putCpmTicket(payload){
    console.log(payload)
    const url = `https://nc-csrd.firebaseio.com/problems/${payload.id}.json`;
    let response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });
    console.log(response);

    return response;
}