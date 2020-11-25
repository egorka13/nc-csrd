import Search from "../UI/search/search.component";

export const template = function () {
    let customer = this.props.store.getter('getCurrentCustomer');
    let name = customer ? customer.surname + ' ' + customer.name + ' ' + customer.patronymic : '---';
    let email = customer ? customer.email : '---';
    return {
        tagName: 'div',
        classList: ['info', 'select-form', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['info__title'],
                textContent: 'Select a customer',
                children: [
                ]
            },
            {
                tagName: 'div',
                classList: ['select-form__search'],
                children: [
                    new Search().render(),
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
                                textContent: name
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
                                textContent: email
                            }
                        ]
                    },

                ]
            }
        ]
    }
}