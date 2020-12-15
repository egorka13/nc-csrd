export const listTemplate = function(){
    let items = this.props.store.getter('getItems');
    return {
        tagName: 'div',
        classList: ['list'],
        children: [
            {
                tagName: 'ul',
                classList: ['list__content'],
                children: [
                    {
                        for: items,
                        tagName: 'li',
                        classList: ['list__item'],
                        attributes: {
                            'data-key': '{{item}}',
                        },
                        children: [
                            {
                                tagName: 'div',
                                classList: ['list__text'],
                                textContent: '{{item}}'
                            },
                            {
                                tagName: 'button',
                                classList: ['list__delete-button'],
                                events: {
                                    onclick: this.methods.clearItem
                                },
                                textContent: 'X'
                            },
                        ]
                    }
                ]
            },
            {
                tagName: 'input',
                classList: ['list__input']
            },
            {
                tagName: 'button',
                classList: ['list__button'],
                events: {
                    onclick: this.methods.addItem
                },
                textContent: 'Add'
            }
        ]
    }
}