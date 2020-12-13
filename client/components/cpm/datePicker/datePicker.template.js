export const template = function () {
    return {
        tagName: 'div',
        classList: ['date-picker', 'input'],
        children: [
            {
                tagName: 'label',
                classList: ['input__label'],
                textContent: this.props.label,
                children: [
                    {
                        tagName: 'input',
                        classList: ['input__input', 'date-picker__input'],
                        events: {
                            onchange: this.props.handler
                        },
                        attributes: {
                            type: 'date',
                            value: this.props.value,
                            min: this.props.min,
                            max: this.props.max
                        },
                    }
                ]
            }
        ]
    }
}
