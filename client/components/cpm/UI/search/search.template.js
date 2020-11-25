import Loader from "../loader/loader.component.js";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['search', 'input'],
        children: [
            {
                tagName: 'input',
                classList: ['input__input'],
                events: {
                    onclick: this.methods.getCustomers
                },
                attributes: {
                    name: 'input-customer',
                    type: 'text',
                    placeholder: 'Some customer\'s data'
                }
            },
            {
                tagName: 'div',
                classList: ['input__loader'],
                children: [
                    new Loader().render(),
                ]
            },
            {
                tagName: 'button',
                classList: ['input__button'],
                children: [
                    {
                        tagName: 'i',
                        classList: ['fas', 'fa-input', 'input__icon'],
                    },
                ]
            },
            {
                tagName: 'button',
                classList: ['input__closer'],
                events: {
                    onclick: this.methods.closeDropdown.bind(this)
                },
                children: [
                    {
                        tagName: 'i',
                        classList: ['fas', 'fa-times', 'input__icon'],
                    },
                ]
            },
            {
                tagName: 'div',
                classList: ['input__dropdown', '_hidden'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['input__item'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['input__name'],
                                textContent: 'Dmitriev Vladislav Vasilyevych'
                            },
                            {
                                tagName: 'div',
                                classList: ['input__phone'],
                                textContent: '+7(985)381-31-37'
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['input__item'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['input__name'],
                                textContent: 'Dmitriev Vladislav Vasilyevych'
                            },
                            {
                                tagName: 'div',
                                classList: ['input__phone'],
                                textContent: '+7(985)381-31-37'
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['input__item'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['input__name'],
                                textContent: 'Dmitriev Vladislav Vasilyevych'
                            },
                            {
                                tagName: 'div',
                                classList: ['input__phone'],
                                textContent: '+7(985)381-31-37'
                            }
                        ]
                    },
                ]
            }

        ]
    }
}

export const itemTemplate = function(name, phone, id){
    return {
        tagName: 'div',
        classList: ['input__item'],
        attributes: {
            'data-id': id
        },
        events: {
            onclick: this.methods.setCustomer.bind(this)
        },
        children: [
            {
                tagName: 'div',
                classList: ['input__name'],
                textContent: name
            },
            {
                tagName: 'div',
                classList: ['input__phone'],
                textContent: phone
            }
        ]
    }
}