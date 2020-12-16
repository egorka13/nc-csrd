export const template = function () {
    return {
        tagName: 'div',
        classList: ['info', '_problem', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['info__title'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['info__title-text'],
                        textContent: 'Problem Info',
                    },
                    {
                        tagName: 'div',
                        classList: ['info__button-container'],
                        children: [
                            {
                                if: this.data().currentTicket?.status === 'active',
                                tagName: 'button',
                                classList: ['info__button', 'button', '_icon'],
                                events: {
                                    onclick: this.methods.modifyTicket('canceled')
                                },
                                children: [
                                    {
                                        tagName: 'i',
                                        classList: ['fas', 'fa-ban'],
                                    },
                                ]
                            },
                            {
                                if: this.data().currentTicket?.status === 'canceled',
                                tagName: 'button',
                                classList: ['info__button', 'button', '_icon'],
                                events: {
                                    onclick: this.methods.modifyTicket('active')
                                },
                                children: [
                                    {
                                        tagName: 'i',
                                        classList: ['fas', 'fa-sync-alt'],
                                    },
                                ]
                            },
                            {
                                tagName: 'button',
                                classList: ['info__button', 'button', '_icon'],
                                events: {
                                    onclick: this.methods.openModifyForm
                                },
                                children: [
                                    {
                                        tagName: 'i',
                                        classList: ['fas', 'fa-edit'],
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                tagName: 'div',
                classList: ['info__list'],
                children: [
                    ...Object.entries(this.computed.params()).map(([param, paramName]) => {
                        return {
                            tagName: 'div',
                            classList: ['info__point'],
                            children: [
                                {
                                    tagName: 'div',
                                    classList: ['info__key'],
                                    textContent: paramName
                                },
                                {
                                    tagName: 'div',
                                    classList: ['info__value'],
                                    textContent: this.data().currentTicket[param] ?
                                        this.data().currentTicket[param] : '---'
                                }
                            ]
                        }
                    }),
                    {
                        classList: ['info__docs'],
                        children: [
                            {
                                if: this.data().currentTicket?.docs,
                                component: 'Docs',
                                arguments: [
                                    this.data().currentTicket?.docs, false
                                ]
                            }
                        ]
                    }
                ]
                // [
                //     {
                //         tagName: 'div',
                //         classList: ['info__point'],
                //         children: [
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__key'],
                //                 textContent: 'Type'
                //             },
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__value'],
                //                 textContent: this.data().currentTicket ?
                //                     this.data().currentTicket.type : ''
                //             }
                //         ]
                //     },
                //     {
                //         tagName: 'div',
                //         classList: ['info__point'],
                //         children: [
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__key'],
                //                 textContent: 'Status'
                //             },
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__value'],
                //                 textContent: this.data().currentTicket ?
                //                     this.data().currentTicket.status : '---'
                //             }
                //         ]
                //     },
                //     {
                //         tagName: 'div',
                //         classList: ['info__point'],
                //         children: [
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__key'],
                //                 textContent: 'Creation Date'
                //             },
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__value'],
                //                 textContent: this.data().currentTicket ?
                //                     this.data().currentTicket.dateOfCreation : '---'
                //             }
                //         ]
                //     },
                //     {
                //         tagName: 'div',
                //         classList: ['info__point'],
                //         children: [
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__key'],
                //                 textContent: 'Closing Date'
                //             },
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__value'],
                //                 textContent: this.data().currentTicket ?
                //                     this.data().currentTicket.closingDate : '---'
                //             }
                //         ]
                //     },
                //     {
                //         tagName: 'div',
                //         classList: ['info__point', '_comment'],
                //         children: [
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__key'],
                //                 textContent: 'Comment'
                //             },
                //             {
                //                 tagName: 'div',
                //                 classList: ['info__value'],
                //                 textContent: this.data().currentTicket ?
                //                     this.data().currentTicket.comment : '---'
                //             }
                //         ]
                //     },
                //
                // ]
            }
        ]
    }
}
