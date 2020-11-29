export const template = function(){
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
                        children: [
                            this.components.Info()
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