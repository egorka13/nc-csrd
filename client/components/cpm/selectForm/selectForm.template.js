import Search from "../UI/search/search.component";
import store from "../../../store";

export const template = function () {
    let customer = this.props.store.getter('getCurrentCustomer');
    let name = customer ? customer.surname + ' ' + customer.name + ' ' + customer.patronymic : '---';
    let email = customer ? customer.email : '---';
    let isCustomerSelected = this.props.store.state.cpm.isCustomerSelected;
    return {
        tagName: 'div',
        classList: isCustomerSelected ?
            ['select-form__overlay'] :
            ['select-form__overlay', '_show'],
        children: [
            {
                tagName: 'div',
                classList: isCustomerSelected ?
                    ['info', 'select-form', 'card'] :
                    ['info', 'select-form', 'card', '_modal'],
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
        ]
    }
}