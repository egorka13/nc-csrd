export const template = function () {
    return {
        tagName: 'div',
        classList: ['checkbox'],
        attributes: {
            'data-param': this.param,
            'data-value': this.value,
        },
        children: [
            {
                tagName: 'input',
                classList: ['checkbox__input'],
                attributes: {
                    id: `checkbox-${this.param}-${this.value}`,
                    type: 'checkbox',
                    checked: this.isChecked
                },
                events: {
                    onchange: this.methods.onCheck
                },
                children: []
            },
            {
                tagName: 'label',
                classList: ['checkbox__icon'],
                attributes: {
                    for: `checkbox-${this.param}-${this.value}`,
                },
                children: [
                    {
                        tagName: 'i',
                        classList: ['fas', 'fa-check'],
                        children: []
                    },
                    {
                        tagName: 'i',
                        classList: ['far', 'fa-square'],
                        children: []
                    },
                ]
            },
            {
                tagName: 'label',
                classList: ['checkbox__label'],
                attributes: {
                    for: `checkbox-${this.param}-${this.value}`,
                },
                textContent: this.label,
                children: []
            },
        ]
    }
}
