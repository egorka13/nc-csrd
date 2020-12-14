export const template = function () {
    return {
        tagName: 'div',
        classList: ['confirm-demo'],
        children: [
            {
                tagName: 'button',
                classList: ['confirm-demo__button', 'button'],
                textContent: 'Coming out?',
                events: {

                }
            }
        ]
    }
}
