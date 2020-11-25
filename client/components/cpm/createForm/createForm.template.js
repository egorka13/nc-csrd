import Search from "../UI/search/search.component";
import Loader from "../UI/loader/loader.component";
import store from "../../../store";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['info', 'create-form', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['info__title'],
                textContent: 'Create new problem',
            },
            {
                tagName: 'div',
                classList: ['create-form__form'],
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
                                        tagName: 'input',
                                        classList: ['input__input'],
                                        attributes: {
                                            name: 'input-comment',
                                            type: 'text',
                                            // placeholder: 'Comment'
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['input', 'create-form__input'],
                        children: [
                            {
                                tagName: 'label',
                                classList: ['input__label'],
                                textContent: 'Type',
                                children: [
                                    {
                                        tagName: 'input',
                                        classList: ['input__input'],
                                        attributes: {
                                            name: 'input-type',
                                            type: 'text',
                                            // placeholder: 'Comment'
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['input', 'create-form__input'],
                        children: [
                            {
                                tagName: 'label',
                                classList: ['input__label'],
                                textContent: 'Status',
                                children: [
                                    {
                                        tagName: 'input',
                                        classList: ['input__input'],
                                        attributes: {
                                            name: 'input-status',
                                            type: 'text',
                                            // placeholder: 'Comment'
                                        }
                                    },
                                ]
                            },
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
                                            type: 'text',
                                            // placeholder: 'Comment'
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['input', 'create-form__input'],
                        children: [
                            {
                                tagName: 'label',
                                classList: ['input__label'],
                                textContent: 'Email',
                                children: [
                                    {
                                        tagName: 'input',
                                        classList: ['input__input'],
                                        attributes: {
                                            name: 'input-email',
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
                            onclick: this.methods.addCpmTicket
                        },
                        textContent: 'Done'
                    }
                ]
            },
        ]
    }
}