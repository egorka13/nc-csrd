export const template = function () {
    let phone = this.props.phone;
    return {
        tagName: 'div',
        classList: ['roe-phone', ...this.props.addClassName],
        children: [
            {
                tagName: 'img',
                classList: ['roe-phone__image'],
                children: [],
            },
            {
                tagName: 'div',
                classList: ['roe-phone__price'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['roe-phone__price-name'],
                        textContent: 'Price:'
                    },
                    {
                        tagName: 'span',
                        classList: ['roe-phone__price-quantity'],
                        textContent: phone.price + ' ₽'
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['roe-phone__model'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['roe-phone__model-name'],
                        textContent: 'Model:'
                    },
                    {
                        tagName: 'span',
                        classList: ['roe-phone__model-content'],
                        textContent: phone.model,
                    }
                ]
            }
        ]
    }
}
