import Search from "../UI/search/search.component";
import Loader from "../UI/loader/loader.component";
import store from "../../../store";

export const template = function () {
    let isCustomerSelected = this.props.store.state.cpm.isCustomerSelected;
    let currentTicket = this.data.currentTicket
    console.log(currentTicket)
    return {
        tagName: 'div',
        classList: isCustomerSelected ?
            ['info', 'create-form', 'card'] :
            ['info', 'create-form', 'card', '_modal'],
        children: [
            {
                tagName: 'div',
                classList: ['info__title', 'create-form__title'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['create-form__title-text'],
                        textContent: currentTicket ?
                            'Edit problem' :
                            'Create new problem'
                    },
                    {
                        tagName: 'div',
                        classList: ['create-form__new'],
                        attributes: {
                            style: currentTicket ? '' : 'display: none'
                        },
                        events: {
                            onclick: this.methods.backToCreate
                        },
                        textContent: 'New problem'
                    },
                ]
            },
            {
                tagName: 'form',
                attributes: {
                    autocomplete: 'off'
                },
                classList: ['create-form__form'],
                events: {
                    onsubmit: function(event){event.preventDefault()}
                },
                children: [
                    {
                        tagName: 'div',
                        classList: ['input'],
                        children: [
                            {
                                tagName: 'label',
                                classList: ['input__label'],
                                textContent: 'Comment',
                                children: [
                                    {
                                        tagName: 'textarea',
                                        classList: ['input__textarea'],
                                        attributes: {
                                            name: 'input-comment',
                                            type: 'text',
                                            // placeholder: 'Comment'
                                        },
                                        textContent: currentTicket ?
                                            currentTicket.comment : ''
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['input', 'create-form__input', '_type'],
                        children: [
                            {
                                tagName: 'label',
                                classList: ['input__label'],
                                textContent: 'Type',
                                children: [
                                    {
                                        tagName: 'input',
                                        classList: ['input__input'],
                                        events: {
                                            onclick: this.methods.openTypeDropdown
                                        },
                                        attributes: {
                                            name: 'input-type',
                                            type: 'text',
                                            'data-name': currentTicket ?
                                                currentTicket.type : '',
                                            value: currentTicket ?
                                                this.data.types[currentTicket.type].name : ''
                                            // placeholder: 'Comment'
                                        }
                                    },
                                ]
                            },
                            {
                                tagName: 'button',
                                classList: ['input__button'],
                                events: {
                                    onclick: this.methods.openTypeDropdown
                                },
                                children: [
                                    {
                                        tagName: 'i',

                                        classList: ['fas', 'fa-chevron-down', 'input__icon'],
                                    },
                                ]
                            },
                            {
                                tagName: 'button',
                                classList: ['input__closer'],
                                events: {
                                    onclick: this.methods.closeTypeDropdown
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
                                    ...Object.entries(this.data.types).map(type => {
                                        return {
                                            tagName: 'div',
                                            classList: ['input__item', '_small'],
                                            attributes: {
                                                'data-name': type[0]
                                            },
                                            events: {
                                                onclick: this.methods.setTypeValue
                                            },
                                            children: [
                                                {
                                                    tagName: 'div',
                                                    classList: ['input__item-text'],
                                                    textContent: type[1].name
                                                }
                                            ]
                                        }
                                    })
                                ]
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['input', 'create-form__input', '_status'],
                        attributes: {
                            style: currentTicket ? '' : 'display: none'
                        },
                        children: [
                            {
                                tagName: 'label',
                                classList: ['input__label'],
                                textContent: 'Status',
                                children: [
                                    {
                                        tagName: 'input',
                                        classList: ['input__input'],
                                        events: {
                                            onclick: this.methods.openStatusDropdown
                                        },
                                        attributes: {
                                            name: 'input-status',
                                            type: 'text',
                                            'data-name': currentTicket ?
                                                currentTicket.status : '',
                                            value: currentTicket ?
                                                this.data.statuses[currentTicket.status].name : ''
                                            // placeholder: 'Comment'
                                        }
                                    },
                                ]
                            },
                            {
                                tagName: 'button',
                                classList: ['input__button'],
                                events: {
                                    onclick: this.methods.openStatusDropdown
                                },
                                children: [
                                    {
                                        tagName: 'i',
                                        classList: ['fas', 'fa-chevron-down', 'input__icon'],
                                    },
                                ]
                            },
                            {
                                tagName: 'button',
                                classList: ['input__closer'],
                                events: {
                                    onclick: this.methods.closeStatusDropdown
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
                                    ...Object.entries(this.data.statuses).map(type => {
                                        return {
                                            tagName: 'div',
                                            classList: ['input__item', '_small'],
                                            attributes: {
                                                'data-name': type[0]
                                            },
                                            events: {
                                                onclick: this.methods.setStatusValue
                                            },
                                            children: [
                                                {
                                                    tagName: 'div',
                                                    classList: ['input__item-text'],
                                                    textContent: type[1].name
                                                }
                                            ]
                                        }
                                    })
                                ]
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['input', 'create-form__input'],
                        children: [
                            {
                                tagName: 'label',
                                classList: ['input__label'],
                                textContent: 'Creation date',
                                children: [
                                    {
                                        tagName: 'input',
                                        classList: ['input__input'],
                                        attributes: {
                                            name: 'input-creation-date',
                                            value: currentTicket ?
                                                currentTicket.dateOfCreation :
                                                this.methods.getCurrentDate(),
                                            type: 'text',
                                            // placeholder: 'Comment'
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        tagName: 'button',
                        classList: ['button', 'create-form__button'],
                        events: {
                            onclick: currentTicket ?
                                this.methods.updateCpmTicket :
                                this.methods.addCpmTicket
                        },
                        textContent: 'Done'
                    },
                ]
            },
        ]
    }
}