export const template = function () {
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
                                textContent: 'Customer support'
                            }
                        ]
                    },
                ]
            }
        ]
    }
}