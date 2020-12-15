export const template = function () {
    return {
        tagName: 'div',
        classList: ['confirm'],
        children: [
            {
                tagName: 'div',
                classList: ['confirm__content', 'card'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['confirm__text'],
                        textContent: this.data.text(),
                    },
                    {
                        tagName: 'div',
                        classList: ['confirm__buttons'],
                        children: [
                            {
                                tagName: 'button',
                                classList: ['confirm__cancel', 'button'],
                                attributes: {
                                    'data-value': false
                                },
                                events: {
                                    onclick: this.methods.confirm
                                },
                                textContent: 'Cancel'
                            },
                            {
                                tagName: 'button',
                                classList: ['confirm__confirm', 'button'],
                                attributes: {
                                    'data-value': true
                                },
                                events: {
                                    onclick: this.methods.confirm
                                },
                                textContent: 'Confirm'
                            },
                        ]
                    }
                ]
            }
        ]
    }
}
