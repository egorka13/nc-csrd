export const template = function () {
    return {
        tagName: 'button',
        classList: ['counter__button'],
        attributes: {
            style: 'color: black'
        },
        events: {
            onclick: this.methods.incrementValue
        },
        textContent: '+',
        children: []
    }
}