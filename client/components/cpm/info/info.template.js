export const template = function () {
    return {
        tagName: 'div',
        classList: ['info', '_problem', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['info__title'],
                textContent: 'Problem Info',
                children: []
            },
            {
                tagName: 'div',
                classList: ['info__list'],
                children: Object.entries(this.computed.params()).map(([param, paramName]) => {
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
                })
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