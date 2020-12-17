
export const customerInfoStore = {
    size: '',
    state: {
        //some data
        properties: {
            _id: 'ID',
            'firstname': 'Firstname',
            'secondname': 'Secondname',
            'thirdname': 'Thirdname',
            'patronymic': 'Patronymic',
            'dob': 'Date Of Birth',
            'address': 'Address',
            'telNumber': 'Tel. Number'
        },
        responseCI: {
            '_id': '4238',
            'firstname': 'Artur',
            'secondname': 'Simonyan',
            'patronymic': 'Evgenievich',
            'dob': '23.05.1999',
            'address': 'Russia,692905,Central Federal District, Moscow, Sirenevaya,26,house 2,flat 5',
            'telNumber': '+79845863908'
        },
        responseCM: {
            response: [
                ['E-Mail', 'qwerty@gmail.com', '1'],
                ['Telephone', '89845674323', '1'],
                ['VK', 'vk.com/customer', '1'],
                ['E-Mail', 'ytrewq@gmail.com', '0'],
                ['Telephone', '89845675698', '0'],
                ['VK', 'vk.com/ordinary_man', '0'],
            ]
        },
        responseCL: {
            response: [
                ['Home','1107','Central District','Moscow','Olovo str.', '25', '9','0'],
                ['Work','1107','Central District','Moscow','Slavyznkino str.', '3', '6','1'],
                ['Work','1107','Central District','Moscow','Derevyankino str.', '15', '6','0'],
                ['Home','1107','Central District','Moscow','Petrovka str.', '7', '6','0'],
            ]
        },
        responseCD: {
            1: {
                name: 'Billing',
                status: 'Closed',
                lastUpd: '24.10.2020',
                attachment: 'ijirf4994ti4t.docx'
            },
            2: {
                name: 'Billing',
                status: 'Closed',
                lastUpd: '24.10.2020',
                attachment: 'ijirf4994ti4t.docx'
            },
            3: {
                name: 'Billing',
                status: 'Closed',
                lastUpd: '24.10.2020',
                attachment: 'ijirf4994ti4t.docx'
            },
            4: {
                name: 'Billing',
                status: 'Closed',
                lastUpd: '24.10.2020',
                attachment: 'ijirf4994ti4t.docx'
            }
        }
    },
    getters: {
        async getItems(context, payload){

            // В будущем из внешней системы

            const url = 'https://nc-csrd.firebaseio.com/customers.json';
            const response = await fetch(url);
            const data = await response.json();

            console.groupCollapsed('fetch GET /customers.json');

            const customers = Object
                .entries(data)
                .map(([id, customer]) => {
                    customer.id = id;
                    return customer;
                });

            console.log(customers);

            // store.commit('loadCpmTickets', tickets);
            // store.commit('setInitialCpmCurrentTicket', tickets[tickets.length - 1]);
            console.groupEnd();

            // return context.state.response;
        }
    },
    actions: {
        addCustomerInfo(context, payload) {

            // some actions

            context.commit('addCustomerInfo', payload);
        },
        debounce(context, payload) {
            context.commit('debounce', payload)
        }
    },
    mutations: {
        addCustomerInfo(state, payload) {

            //rewrite state

            state.customerInfoStore.items.push(payload);

            return state;
        },

        debounce(state, payload) {

        }
    }
}