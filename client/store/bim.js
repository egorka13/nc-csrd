export const bimStore = {
    state: {
        transactions: [],
        ticketFilters: {},
        transactionTypes: {
            example: {
                availableParameters: {
                    dateOfCreation: "Date of creation",
                    title: "Title",
                    type: "Type",
                    paymentMethod: "Payment Method",
                    amountRUB: "Amount, RUB",
                    amountLP: "Amount, LP",
                    status: "Status",
                }
            },
        },
            tranactionData: [
        {
            title: "balance for for Customer 178852",
            dateOfCreation: "27.10.2020",
            status: "confirmed",
            type: "D",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "bank card",
            amountRUB: "+595",
            amountLP: "",
          },
          {
            title: "balance white-off for for Customer 796587",
            dateOfCreation: "28.10.2020",
            status: "refunded",
            type: "W",
            id: "-MMPp2GuxIR8kConlkmK7G7M",
            paymentMethod: "bank card",
            amountRUB: "-595",
            amountLP: "",
          },
          {
            title: "balance for for Customer 852425",
            dateOfCreation: "05.11.2020",
            status: "confirmed",
            type: "D",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "cash",
            amountRUB: "+595",
            amountLP: "",
          },
          {
            title: "balance for for Customer 965874",
            dateOfCreation: "10.11.2020",
            status: "canceled",
            type: "D",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "bank card",
            amountRUB: "",
            amountLP: "+15",
          },
          {
            title: "balance for for Customer 486341",
            dateOfCreation: "12.11.2020",
            status: "confirmed",
            type: "D",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "e-wallet",
            amountRUB: "+595",
            amountLP: "",
          },
          {
            title: "balance white-off for for Customer 365986",
            dateOfCreation: "15.11.2020",
            status: "confirmed",
            type: "D",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "bank card",
            amountRUB: "",
            amountLP: "+48",
          },
          {
            title: "balance for for Customer 489637",
            dateOfCreation: "20.11.2020",
            status: "confirmed",
            type: "W",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "bank card",
            amountRUB: "-758",
            amountLP: "",
          },
          {
            title: "balance for for Customer 965874",
            dateOfCreation: "20.11.2020",
            status: "refunded",
            type: "D",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "cash",
            amountRUB: "+9965",
            amountLP: "",
          },
          {
            title: "balance for for Customer 786482",
            dateOfCreation: "24.11.2020",
            status: "canceled",
            type: "W",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "e-wallet",
            amountRUB: "-7444",
            amountLP: "",
          },
          {
            title: "balance white-off for for Customer 264869",
            dateOfCreation: "27.11.2020",
            status: "confirmed",
            type: "W",
            id: "-MMPp2GuxIR8kCoK7dG7M",
            paymentMethod: "bank card",
            amountRUB: "-5454",
            amountLP: "",
          },
          {
            title: "balance for for Customer 149387",
            dateOfCreation: "27.11.2020",
            status: "pending confirmed",
            type: "W",
            id: "-MMPp2GuxIR8kCdoK7G7M",
            paymentMethod: "bank card",
            amountRUB: "-451",
            amountLP: "",
          },
          {
            title: "balance for for Customer 758745",
            dateOfCreation: "28.11.2020",
            status: "not confirmed",
            type: "D",
            id: "-MMPp2GuxIRd8kCoK7G7M",
            paymentMethod: "cash",
            amountRUB: "",
            amountLP: "+9",
          },
          {
            title: "balance white-off for for Customer 887445",
            dateOfCreation: "01.12.2020",
            status: "confirmed",
            type: "D",
            id: "-MMPp2GuwxIR8kCoK7G7M",
            paymentMethod: "e-wallet",
            amountRUB: "+458",
            amountLP: "",
          },
          {
            title: "balance white-off for for Customer 638741",
            dateOfCreation: "05.12.2020",
            status: "not confirmed",
            type: "W",
            id: "-MMPp2GuxIR8kConlkmK7G7M",
            paymentMethod: "bank card",
            amountRUB: "-56",
            amountLP: "",
          },
          {
            title: "balance for for Customer 789658",
            dateOfCreation: "07.12.2020",
            status: "canceled",
            type: "D",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "bank card",
            amountRUB: "",
            amountLP: "+80",
          },
          {
            title: "balance for for Customer 565187",
            dateOfCreation: "7.12.2020",
            status: "canceled",
            type: "W",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "e-wallet",
            amountRUB: "-547",
            amountLP: "",
          },
          {
            title: "balance white-off for for Customer 741368",
            dateOfCreation: "10.12.2020",
            status: "confirmed",
            type: "D",
            id: "-MMPp2GuxdwdwIR8kCoK7G7M",
            paymentMethod: "bank card",
            amountRUB: "+547",
            amountLP: "",
          },
    ],
    relationshipTypes: {
      example: {
        availableParameters: {
          sponsorFor: "Sponsor for",
          amountRUB: "Amount, RUB",
        },
      },
    },
    relationshipData: [
      {
          sponsorFor: "Petrov",
          amountRUB: "500",
      },
      {
          sponsorFor: "Smirnov",
          amountRUB: "700",
      },
      {
          sponsorFor: "Korolev",
          amountRUB: "900",
      },
      {
          sponsorFor: "Ivanov",
          amountRUB: "500",
      },
      
    ],
    cardsTypes: {
      example: {
        availableParameters: {
          card_number: "ID:",
          card_holder: "Name:",
          card_date: "Patronymic:",
          card_holder_text: "CARD HOLDER",
          card_date_text: "EXPIRES",
        },
      },
    },
    cardsData: [
      {
        card_number: "XXXX XXXX XXXX 1587",
        card_holder: "Ivan Ivanov",
        card_date: "12/22",
        card_holder_text: "CARD HOLDER",
        card_date_text: "EXPIRES",
      },
      {
          card_number: "XXXX XXXX XXXX 8541",
          card_holder: "Ivan Ivanov",
          card_date: "04/23",
          card_holder_text: "CARD HOLDER",
          card_date_text: "EXPIRES",
        },
        {
          card_number: "+7 XXX XX XX 28",
          card_holder: "Ivan Ivanov",
          card_date: "10/21",
          card_holder_text: "E-WALLET HOLDER",
          card_date_text: "EXPIRES",
        },
        {
          card_number: "XXXX XXXX XXXX 8745",
          card_holder: "Ivan Ivanov",
          card_date: "12/22",
          card_holder_text: "CARD HOLDER",
          card_date_text: "EXPIRES",
        },
        {
          card_number: "+7 XXX XX XX 74",
          card_holder: "Ivan Ivanov",
          card_date: "10/21",
          card_holder_text: "E-WALLET HOLDER",
          card_date_text: "EXPIRES",
        },
    ],
    selfKeysTypes: {
      example: {
        availableParameters: {
          billing_account_ID: "ID:",
          customer_name: "Name:",
          customer_patronymic: "Patronymic:",
          customer_surname: "Surname:",
          customer_relationship: "Customer relationship:",
          billing_status: "Status:",
          now_balance: "Balance:",
          debiting:"Debiting:",
          last_balance1: "November",
          last_balance2: "October",   
          last_balance3: "September",             
          now_loyalty_point: "Loyalty points:",
        },
      },
    },
    selfValuesData: [
      {
        billing_account_ID: "178389",
        customer_name: "Ivan",
        customer_patronymic: "Ivanovich",
        customer_surname: "Ivonov",
        customer_relationship: "sponsor",
        billing_status: "active",
        now_balance: "500 RUB",
        debiting:"",
        last_balance1: "100 RUB",
        last_balance2: "400 RUB",   
        last_balance3: "300 RUB",   
        now_loyalty_point: "12",
      },
    ]
    },
    getters: {
      getBimTickets(context) {
          if (Object.keys(context.state.bim.ticketFilters).length !== 0) {
              return context.state.bim.transactions.filter(transaction => {
                  return Object
                      .entries(context.state.bim.ticketFilters)
                      .map(([param, value]) => {
                          console.log(transaction[param] + ' === ' + value);
                          return transaction[param] === value
                      })
                      .indexOf(false) === -1;
              })
          }

          return context.state.bim.transactions;
      },
      getCurrentTicket(context) {

          return context.state.bim.currentTicket;
      },
  },
  actions: {
      clearBimTicket(context, payload) {
          context.commit('clearBimTicket', payload);
      },
      filterBimTickets(context, payload) {
          context.commit('filterBimTickets', payload);
      },
      clearBimTicketsFilters(context) {
          context.commit('clearBimTicketsFilters');
      },
      setCurrentBimTicket(context, payload) {
          context.commit('setCurrentBimTicket', payload);
      },
  },
  mutations: {
      loadBimTickets(state, payload) {
          state.bim.transactions = payload;

          return state;
      },
      setCurrentTicket(state) {
          state.bim.currentTicket = state.bim.transactions[state.bim.transactions.length - 1];

          return state;
      },
      filterBimTickets(state, payload) {
          if (Object.keys(state.bim.ticketFilters).length === 0) {
              state.bim.ticketFilters = payload;
          } else {
              Object.entries(payload).forEach(([param, value]) => {
                  state.bim.ticketFilters[param] = value;
              })
          }

          return state;
      },
      clearBimTicketsFilters(state) {
          state.bim.ticketFilters = {};

          return state;
      },
      setCurrentBimTicket(state, payload) {
          state.bim.currentTicket = state.bim.transactions.find(transaction => transactions.id === payload);

          return state;
      }
  },
}
