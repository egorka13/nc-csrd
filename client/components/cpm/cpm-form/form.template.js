export const template = function(){
    let ticketParams = this.props.store.state.cpm.ticketTableParams;
    return {
        tagName: 'div',
        classList: ['cpm-form', 'card'],
        children: [
            {
                tagName: 'h2',
                classList: ['cpm-form__title'],
                textContent: 'Create a ticket',
            },
            // {
            //     tagName: 'p',
            //     classList: ['cpm-form__paragraph'],
            //     textContent: JSON.stringify(this.props.store.state.cpm.tickets),
            // },
            {
                tagName: 'div',
                attributes: {
                    name: 'addCpmTicket'
                },
                events: {
                    onsubmit: this.methods.addCpmTicket
                },
                classList: ['cpm-form__form'],
                children: [
                    ...Object.keys(ticketParams).map((param) => { return {
                        tagName: 'div',
                        classList: ['cpm-form__input-container'],
                        children: [
                            {
                                tagName: 'label',
                                classList: ['cpm-form__label'],
                                textContent: ticketParams[param],
                                children: [
                                    {
                                        tagName: param === 'comment' ? 'textarea' : 'input',
                                        attributes: {
                                            name: param,
                                            type: 'text',
                                            rows: param === 'comment' ? '5' : '',
                                            cols: param === 'comment' ? '40' : '',
                                        },
                                        classList: ['cpm-form__text-input']
                                    }
                                ]
                            }
                        ]
                    }}),
                    {
                        tagName: 'button',
                        textContent: 'Create',
                        events: {
                            onclick: this.methods.addCpmTicket
                        },
                        classList: ['cpm-form__button']
                    }
                ]
            },
        ]
    }
}