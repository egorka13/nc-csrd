export const template = function () {
    return {
        tagName: 'div',
        classList: ['confirm-demo'],
        attributes: {
            style: 'margin-top: 15px; margin-left: 15px;'
        },
        children: [
            {
                tagName: 'button',
                classList: ['confirm-demo__button', 'button'],
                textContent: 'Coming out?',
                events: {
                    onclick: (function() {
                        this.props.store.dispatch('confirm', {text: 'why r u gay?', action: 'comingOut'});
                    }).bind(this)
                }
            },
            {
                tagName: 'h2',
                classList: ['confirm-demo__congrats']
            }
        ]
    }
}
