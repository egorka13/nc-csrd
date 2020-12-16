export const template = function () {
    return {
        tagName: 'div',
        classList: ['cpm'],
        children: [
            {
                tagName: 'div',
                classList: ['cpm__header'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm__title'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['cpm__title-name'],
                                textContent: 'Customer problem management',
                            },
                        ]
                    },
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm__content'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm__info'],
                        attributes: {
                            'data-name': 'cpmInfo',
                        },
                        children: [
                            {
                                if: this.data().status === 'show',
                                component: 'Info'
                            },
                            {
                                if: this.data().status === 'create' ||
                                    this.data().status === 'modify',
                                component: 'Form'
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['cpm__table'],
                        children: [
                            this.components.Table()
                        ]
                    },
                ]
            },
        ]
    }
}
