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
                                classList: ['button'],
                                textContent: 'Select files...'
                            },
                            {
                                tagName: 'input',
                                classList: ['docs__button', 'docs__input'],
                                attributes: {
                                    type: 'file',
                                    style: 'display: none',
                                },
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
                                classList: ['docs__item-name'],
                                textContent: '{{item}}'
                            },
                        ]
                    },
                    {
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
                                classList: ['docs__item-name'],
                                textContent: 'file.docx'
                            },
                        ]
                    },
                    {
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
                                classList: ['docs__item-name'],
                                textContent: 'file.docx'
                            },
                        ]
                    },
                    {
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
                                classList: ['docs__item-name'],
                                textContent: 'file.docx'
                            },
                        ]
                    },
                    {
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
                                classList: ['docs__item-name'],
                                textContent: 'file.docx'
                            },
                        ]
                    },
                ]
            }
        ]
    }
}
