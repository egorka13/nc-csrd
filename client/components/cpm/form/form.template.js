export const template = function () {
    return {
        tagName: 'div',
        classList: ['form', 'card'],
        children: [
            {
                tagName: 'div',
                classList: ['form__title'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['form__title-text'],
                        textContent: this.data().status === 'create' ?
                            'Create new ticket' :
                            'Modify ticket'

                    },
                ]
            },
            {
                tagName: 'form',
                attributes: {
                    autocomplete: 'off'
                },
                classList: ['form__form'],
                events: {
                    onsubmit: function(event){event.preventDefault()}
                },
                children: Object
                    .entries(this.data().types.generic.availableParameters)
                    .map(([key, value]) => {
                        return this.components.Input(key, value)
                    })
            },
        ]
    }
}