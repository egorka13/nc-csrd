export const template = function () {
    return {
        classList: ['docs'],
        children: [
            {
                classList: ['docs__header'],
                children: [
                    {
                        classList: ['docs__title'],
                        textContent: 'Docs'
                    },
                    {
                        if: this.props.isForm,
                        tagName: 'label',
                        classList: ['docs__label'],
                        children: [
                            {
                                classList: ['button', '_outline'],
                                textContent: 'Select files...'
                            },
                            {
                                tagName: 'input',
                                classList: ['docs__button', 'docs__input'],
                                attributes: {
                                    type: 'file',
                                    style: 'display: none',
                                },
                                events: {
                                    onchange: this.props.handler
                                }
                            },
                        ]

                    },
                ]
            },
            {
                classList: ['docs__list'],
                children: [
                    {
                        if: this.props.docs,
                        for: this.props.docs,
                        classList: ['docs__item'],
                        children: [
                            {
                                classList: ['docs__item-icon'],
                                children: [
                                    {
                                        tagName: 'i',
                                        classList: ['fas', 'fa-file-word']
                                    }
                                ]
                            },
                            {
                                if: !!(this.props.isForm && this.props.closeHandler),
                                classList: ['docs__item-close'],
                                attributes: {
                                    'data-name': '{{item}}'
                                },
                                events: {
                                    onclick: this.props.closeHandler
                                },
                                children: [
                                    {
                                        tagName: 'i',
                                        classList: ['fas', 'fa-times']
                                    }
                                ]
                            },
                            {
                                classList: ['docs__item-name'],
                                textContent: '{{item}}'
                            },
                        ]
                    },

                ]
            }
        ]
    }
}
