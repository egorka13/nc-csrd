export const template = function () {
    let currentTicket = this.props.store.getter('getCurrentTicket');
    return {
        tagName: 'div',
        classList: ['info', '_problem', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['info__title'],
                textContent: 'Problem Info',
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
                                textContent: 'Type'
                            },
                            {
                                tagName: 'div',
                                classList: ['info__value'],
                                textContent: currentTicket ? currentTicket.type : ''
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
                                textContent: 'Status'
                            },
                            {
                                tagName: 'div',
                                classList: ['info__value'],
                                textContent: currentTicket ? currentTicket.status : '---'
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
                                textContent: 'Creation Date'
                            },
                            {
                                tagName: 'div',
                                classList: ['info__value'],
                                textContent: currentTicket ? currentTicket.dateOfCreation : '---'
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
                                textContent: 'Closing Date'
                            },
                            {
                                tagName: 'div',
                                classList: ['info__value'],
                                textContent: currentTicket ? currentTicket.closingDate : '---'
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['info__point', '_comment'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['info__key'],
                                textContent: 'Comment'
                            },
                            {
                                tagName: 'div',
                                classList: ['info__value'],
                                textContent: currentTicket ? currentTicket.comment : '---'
                            }
                        ]
                    },

                ]
            }
        ]
    }
}