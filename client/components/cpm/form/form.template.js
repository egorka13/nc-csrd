export const template = function () {
    return {
        tagName: 'div',
        classList: ['form', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['form__title'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['form__title-text'],
                        textContent: this.data().status === 'create' ?
                            'Create new ticket' :
                            'Modify ticket'
                    },
                ]
            },
            {
                tagName: 'form',
                attributes: {
                    autocomplete: 'off',
                    name: 'create'
                },
                classList: ['form__form'],
                events: {
                    onsubmit: function(event){event.preventDefault()}
                },
                children: [
                    this.data().status === 'create' ?
                    this.components.Input(
                        'type',
                        'Type',
                        this.computed.createTypeValue(),
                        this.computed.dropdownTypes(),
                    ) :
                    this.components.Input(
                        'type',
                        'Type',
                        this.data().currentTicket.type,
                        null,
                        true
                    ),
                    this.data().status === 'modify' ?
                        this.components.Input(
                            'status',
                            'Status',
                            this.data().currentTicket.status,
                            this.computed.dropdownStatuses(),
                        ) : null,
                    ...this.data().type || this.data().status === 'modify' ?
                    [
                        ...this.data().status === 'create' ?
                            this.methods.generateCreateForm() :
                            this.methods.generateModifyForm(),
                        {
                            tagName: 'div',
                            classList: ['form__docs'],
                            children: [
                                {
                                    if: this.data().currentTicket.docs,
                                    component: 'Docs',
                                    arguments: [this.data().currentTicket.docs]
                                }
                            ]
                        },
                        {
                            tagName: 'div',
                            classList: ['form__footer'],
                            children: [
                                {
                                    tagName: 'button',
                                    classList: ['button', 'form__button'],
                                    events: {
                                        onclick: this.data().status === 'create' ?
                                            this.methods.createTicket :
                                            this.methods.modifyTicket
                                    },
                                    textContent: 'Done'
                                },
                                {
                                    tagName: 'div',
                                    classList: ['loader', 'form__loader']
                                }
                            ]
                        }
                    ] : []
                ]
            },
        ]
    }
}
