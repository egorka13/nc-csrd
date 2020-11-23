export const template = function () {
    let currentTicket = this.props.store.getter('getCurrentTicket');
    let currentCustomer = {
        name: '---',
        email: '---'
    };
    if(currentTicket && this.customers && currentTicket.customerId){
        let customer = this.customers.find(customer => customer.id === currentTicket.customerId);
        if(customer)
            currentCustomer = {
                name: customer.surname + ' ' +
                    customer.name + ' ' +
                    customer.patronymic,
                email: customer.email
            };
    }
    return {
        tagName: 'div',
        classList: ['info', '_customer', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['info__title'],
                textContent: 'Customer Info',
                children: [
                ]
            },
            {
                tagName: 'div',
                classList: ['info__list'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['info__point'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['info__key'],
                                textContent: 'Name'
                            },
                            {
                                tagName: 'div',
                                classList: ['info__value'],
                                textContent: currentCustomer.name
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['info__point'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['info__key'],
                                textContent: 'Email'
                            },
                            {
                                tagName: 'div',
                                classList: ['info__value'],
                                textContent: currentCustomer.email
                            }
                        ]
                    },

                ]
            }
        ]
    }
}