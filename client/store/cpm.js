import {stringToDate} from "../modules/date/date";

export const cpmStore = {
    state: {
        status: 'show',
        isFilterBar: false,
        isSortBar: false,
        tickets: [],
        ticketFilters: {
            active: true,
            type: new Set(),
            status: new Set(),
            datesOfCreation: {
                active: true,
                begin: new Date(2020, 10, 1),
                end: new Date(),
            },
            closingDates: {
                active: true,
                begin: new Date(2020, 10, 1),
                end: new Date(),
            }
        },
        ticketSort: {
            param: 'dateOfCreation',
            asc: false
        },
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
            const filters = context.state.cpm.ticketFilters;
            if (filters.active) {
                return context.state.cpm.tickets
                    .filter(ticket => {

                        const dateOfCreation = stringToDate(ticket.dateOfCreation);
                        const closingDate = stringToDate(ticket.closingDate);

                        return (!filters.type.size || filters.type.has(ticket.type)) &&
                            (!filters.status.size || filters.status.has(ticket.status)) &&
                            (!filters.datesOfCreation.active || dateOfCreation >= filters.datesOfCreation.begin &&
                            dateOfCreation <= filters.datesOfCreation.end) &&
                            (!filters.closingDates.active || closingDate >= filters.closingDates.begin &&
                            closingDate <= filters.closingDates.end);

                    })
                    .sort((a, b) => {
                        return context.state.cpm.ticketSort.asc ?
                            stringToDate(b[context.state.cpm.ticketSort.param]) -
                            stringToDate(a[context.state.cpm.ticketSort.param]) :
                            stringToDate(a[context.state.cpm.ticketSort.param]) -
                            stringToDate(b[context.state.cpm.ticketSort.param])
                    });
            }

            return context.state.cpm.tickets
                .filter(ticket => ticket.customerId === context.state.cpm.currentCustomer.id)
                .sort((a, b) => {
                    return context.state.cpm.ticketSort.asc ?
                        stringToDate(b[context.state.cpm.ticketSort.param]) -
                        stringToDate(a[context.state.cpm.ticketSort.param]) :
                        stringToDate(a[context.state.cpm.ticketSort.param]) -
                        stringToDate(b[context.state.cpm.ticketSort.param])
                });
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
        },
        toggleFilterBar(context, payload) {
            context.commit('toggleFilterBar', payload);
        },
        toggleSortBar(context, payload) {
            context.commit('toggleSortBar', payload);
        },
        setFilters(context, payload) {
            context.commit('setFilters', payload);
        },
        changeSort(context, payload) {
            context.commit('changeSort', payload);
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
            if(!state.cpm.ticketFilters.active) {
                state.cpm.ticketFilters.active = true;
            }
            console.log(payload);
            Object.entries(payload).forEach(([param, value]) => {
                console.log(param);
                console.log(value);
                switch (param) {
                    default:
                        state.cpm.ticketFilters[param] = new Set([value]);
                }
            });

            return state;
        },
        clearCpmTicketsFilters(state) {
            state.cpm.isFilterBar = false;
            state.cpm.isSortBar = false;
            state.cpm.ticketFilters.active = false;
            state.cpm.ticketFilters.type = new Set();
            state.cpm.ticketFilters.status = new Set();
            state.cpm.ticketFilters.datesOfCreation = {
                begin: new Date(2020, 10, 1),
                end: new Date(),
                active: false
            };
            state.cpm.ticketFilters.closingDates = {
                begin: new Date(2020, 10, 1),
                end: new Date(),
                active: false
            };

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
        toggleFilterBar(state, payload){
            state.cpm.isSortBar = false;
            state.cpm.isFilterBar = !state.cpm.isFilterBar;

            return state;
        },
        toggleSortBar(state, payload){
            state.cpm.isFilterBar = false;
            state.cpm.isSortBar = !state.cpm.isSortBar;

            return state;
        },
        setFilters(state, payload){
            if(!state.cpm.ticketFilters.active) {
                state.cpm.ticketFilters.active = true;
            }
            if(!state.cpm.ticketFilters.datesOfCreation.active) {
                state.cpm.ticketFilters.datesOfCreation.active = true;
            }
            if(!state.cpm.ticketFilters.closingDates.active) {
                state.cpm.ticketFilters.closingDates.active = true;
            }
            state.cpm.ticketFilters.type = new Set(payload.types);
            state.cpm.ticketFilters.status = new Set(payload.statuses);
            state.cpm.ticketFilters.datesOfCreation.begin = payload.datesOfCreation[0];
            state.cpm.ticketFilters.datesOfCreation.end = payload.datesOfCreation[1];
            state.cpm.ticketFilters.closingDates.begin = payload.closingDates[0];
            state.cpm.ticketFilters.closingDates.end = payload.closingDates[1];

            console.log(state.cpm.ticketFilters)

            return state;
        },
        setSort(state, payload){

            state.cpm.ticketSort = payload;

            return state;
        },
        changeSort(state, payload){

            state.cpm.ticketSort.asc = state.cpm.ticketSort.param === payload && !state.cpm.ticketSort.asc;

            state.cpm.ticketSort.param = payload;

            return state;
        }
    },
}
