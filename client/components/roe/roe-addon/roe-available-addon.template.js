export const template = function () {
    let addon = this.props.addon;
    return {
        tagName: 'div',
        classList: ['addon', '_available', ...this.props.addClassName],
        children: [
            {
                tagName: 'div',
                classList: ['addon__header'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['addon__header-name'],
                        textContent: addon.name
                    },
                    //TODO button component
                    {
                        tagName: 'button',
                        classList: ['addon__header-button', 'roe-button'],
                        textContent: addon.button,
                        events: {
                            onclick: this.methods.connectPackage.bind(this),
                        }
                    },
                ],

            },
            {
                tagName: 'div',
                classList: ['addon__main'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['addon__main-type'],
                        textContent: addon.type
                    },
                    {
                        tagName: 'span',
                        classList: ['addon__main-quantity-total'],
                        textContent: addon.quantity
                    },
                    {
                        tagName: 'span',
                        classList: ['addon__main-quantity-dimension'],
                        textContent: addon.dimension
                    }

                ]
            },
            {
                tagName: 'div',
                classList: ['addon__price'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['addon__price-name'],
                        textContent: 'Price:'
                    },
                    {
                        tagName: 'span',
                        classList: ['addon__price-quantity'],
                        textContent: addon.price + ' ₽'
                    }
                ]
            },
        ]
    }
}
