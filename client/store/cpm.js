export const cpmStore = {
    state: {
        status: 'show',
        tickets: [],
        ticketFilters: {},
        ticketToCreate: {},
        currentCustomer: {
            id: '-MMPZB2uLXAubVr8QqdA',
            billingId: '-MMPf-qcONEQ8b02mtqd',
            address: "Moscow, Kosmodemyanova st. 144",
            dateOfBirth: "11.11.1980",
            contacts: [
                {
                    type: 'email',
                    value: 'example@mail.ru'
                },
                {
                    type: 'email',
                    value: 'kek@lol.ua'
                },
                {
                    type: 'email',
                    value: 'hm@puk.com'
                },
            ],
            name: "Demyan",
            patronymic: "Frolovich",
            phone: "88005553535",
            surname: "Prokhorov"
        },
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
                availableShowParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    type: 'Type',
                    status: 'Status',
                    dateOfCreation: 'Current date',
                    closingDate: 'Closing date',
                    comment: 'Comment',
                },
                availableParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    comment: 'Comment',
                    dateOfCreation: 'Current date',
                }
            },
            security: {
                name: 'Security',
                fullName: 'Security',
                color: '#964FFF',
                availableShowParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    type: 'Type',
                    status: 'Status',
                    email: 'Email',
                    dateOfCreation: 'Current date',
                    closingDate: 'Closing date',
                    comment: 'Comment',
                },
                availableParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account Id',
                    email: 'Customer email',
                    comment: 'User comment',
                    dateOfCreation: 'Current date',
                }
            },
            billing: {
                name: 'Billing',
                fullName: 'Billing',
                color: '#0F5BFF',
                availableShowParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    type: 'Type',
                    status: 'Status',
                    billingId: 'Customer billing id',
                    dateOfCreation: 'Current date',
                    closingDate: 'Closing date',
                    comment: 'Comment',
                },
                availableParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    dateOfCreation: 'Current date',
                }
            },
            order: {
                name: 'Sales order',
                fullName: 'Order',
                color: '#FA394E',
                availableShowParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    type: 'Type',
                    status: 'Status',
                    billingId: 'Customer billing id',
                    dateOfCreation: 'Current date',
                    closingDate: 'Closing date',
                    comment: 'Comment',
                },
                availableParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    dateOfCreation: 'Current date',
                }
            },
            generic: {
                name: 'Generic',
                fullName: 'Generic',
                color: '#EA87FF',
                availableShowParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    type: 'Type',
                    status: 'Status',
                    billingId: 'Customer billing id',
                    dateOfCreation: 'Current date',
                    closingDate: 'Closing date',
                    comment: 'Comment',
                },
                availableParameters: {
                    id: 'Ticket id',
                    customerId: 'Customer account id',
                    billingId: 'Customer billing id',
                    comment: 'User comment',
                    dateOfCreation: 'Current date',
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
        getCpmTickets(context) {
            if (Object.keys(context.state.cpm.ticketFilters).length !== 0) {
                return context.state.cpm.tickets.filter(ticket => {
                    return Object
                        .entries(context.state.cpm.ticketFilters)
                        .map(([param, value]) => {
                            console.log(ticket[param] + ' === ' + value);
                            return ticket[param] === value
                        })
                        .indexOf(false) === -1;
                })
            }

            return context.state.cpm.tickets
                .filter(ticket => ticket.customerId === context.state.cpm.currentCustomer.id);
        },
        getCurrentTicket(context) {

            return context.state.cpm.currentTicket;
        },
    },
    actions: {
        clearCpmTicket(context, payload) {
            context.commit('clearCpmTicket', payload);
        },
        filterCpmTickets(context, payload) {
            context.commit('filterCpmTickets', payload);
        },
        clearCpmTicketsFilters(context) {
            context.commit('clearCpmTicketsFilters');
        },
        setCurrentCpmTicket(context, payload) {
            context.commit('setCurrentCpmTicket', payload);
        },
        openCreateForm(context, payload) {
            context.commit('openCreateForm', payload);
        },
        openModifyForm(context, payload) {
            context.commit('openModifyForm', payload);
        },
        setTicketToCreate(context, payload) {
            context.commit('setTicketToCreate', payload);
        },
        addCpmTicket(context, payload) {
            context.commit('addCpmTicket', payload);
        }
    },
    mutations: {
        loadCpmTickets(state, payload) {
            state.cpm.tickets = payload;

            return state;
        },
        setInitialCpmCurrentTicket(state) {
            state.cpm.currentTicket = state.cpm.tickets[state.cpm.tickets.length - 1];

            return state;
        },
        filterCpmTickets(state, payload) {
            if (Object.keys(state.cpm.ticketFilters).length === 0) {
                state.cpm.ticketFilters = payload;
            } else {
                Object.entries(payload).forEach(([param, value]) => {
                    state.cpm.ticketFilters[param] = value;
                })
            }

            return state;
        },
        clearCpmTicketsFilters(state) {
            state.cpm.ticketFilters = {};

            return state;
        },
        setCurrentCpmTicket(state, payload) {
            state.cpm.status = 'show';
            state.cpm.currentTicket = state.cpm.tickets.find(ticket => ticket.id === payload);

            return state;
        },
        openCreateForm(state){
            state.cpm.status = 'create';

            return state;
        },
        openModifyForm(state){
            state.cpm.status = 'modify';

            return state;
        },
        setTicketToCreate(state, payload) {
            if (Object.keys(state.cpm.ticketToCreate).length === 0) {
                state.cpm.ticketToCreate = payload;
            } else {
                Object.entries(payload).forEach(([param, value]) => {
                    state.cpm.ticketToCreate[param] = value;
                })
            }

            return state;
        },
        addCpmTicket(state, payload){
            state.cpm.tickets = [];
            state.cpm.ticketToCreate = {};

            return state;
        },
    },
}
