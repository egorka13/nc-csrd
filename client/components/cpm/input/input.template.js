export const template = function () {
    return {
        tagName: 'div',
        classList: ['input'],
        children: [
            {
                tagName: 'label',
                classList: ['input__label'],
                textContent: this.props.paramName,
                children: [
                    {
                        tagName: this.props.param === 'comment' ? 'textarea' : 'input',
                        classList: this.props.param === 'comment' ? ['input__textarea'] : ['input__input'],
                        attributes: {
                            name: 'input-' + this.props.param,
                            type: 'text',
                        },
                        textContent: this.props.textContent
                    },
                ]
            },
            {
                tagName: 'button',
                classList: ['input__button'],
                events: {
                    onclick: this.methods.openDropdown
                },
                children: [
                    {
                        tagName: 'i',

                        classList: ['fas', 'fa-chevron-down', 'input__icon'],
                    },
                ]
            },
            {
                tagName: 'button',
                classList: ['input__closer'],
                events: {
                    onclick: this.methods.closeDropdown
                },
                children: [
                    {
                        tagName: 'i',
                        classList: ['fas', 'fa-times', 'input__icon'],
                    },
                ]
            },
            {
                tagName: 'div',
                classList: ['input__dropdown', '_hidden'],
                children: this.props.item ?
                    Object.entries(this.props.items).map(([key, value]) => {
                        console.log(key + value)
                        return {
                            tagName: 'div',
                            classList: ['input__item', '_small'],
                            attributes: {
                                'data-name': key
                            },
                            events: {
                                // onclick: this.methods.setTypeValue
                            },
                            children: [
                                {
                                    tagName: 'div',
                                    classList: ['input__item-text'],
                                    textContent: value
                                }
                            ]
                        }
                    }) : []
            }
        ]
    }
}