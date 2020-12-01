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
                    this.props.param === 'comment' ?
                    {
                        tagName: 'textarea',
                        classList: ['input__textarea'],
                        attributes: {
                            name: 'input-' + this.props.param,
                        },
                        events: {
                            onclick: this.props.items ?
                                this.methods.openDropdown : () => {}
                        },
                        textContent: this.props.textContent
                    } :
                    {
                        tagName: 'input',
                        classList: ['input__input'],
                        events: {
                            onclick: this.props.items ?
                                this.methods.openDropdown : () => {}
                        },
                        attributes: {
                            name: 'input-' + this.props.param,
                            type: 'text',
                            value: this.props.textContent,
                            disabled: this.props.disabled
                        },
                    }
                ]
            },
            ...this.props.items ? [{
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
                children: this.props.items ?
                    Object.entries(this.props.items).map(([key, value]) => {
                        console.log(key + value)
                        return {
                            tagName: 'div',
                            classList: ['input__item', '_small'],
                            attributes: {
                                'data-name': key,
                                'data-param': this.props.param
                            },
                            events: {
                                onclick: this.methods.setValue
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
            ] : []
        ]
    }
}