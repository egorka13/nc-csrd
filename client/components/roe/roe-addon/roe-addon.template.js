export const template = function () {
    let addon = this.props.addon;
    return {
        tagName: 'div',
        classList: ['addon', ...this.props.addClassName],
        children: [
            {
                tagName: 'span',
                classList: ['addon__name'],
                textContent: addon.name
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
                        classList: ['addon__main-quantity-left'],
                        textContent: addon.left
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
            {
                tagName: 'div',
                classList: ['addon__disconnection'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['addon__disconnection-name'],
                        textContent: 'Disconnection:'
                    },
                    {
                        tagName: 'span',
                        classList: ['addon__disconnection-value'],
                        textContent: addon.dateOfDisconnection
                    }
                ]
            },
        ]
    }
}
