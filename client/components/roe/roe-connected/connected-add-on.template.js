import store from "../../../store";

export const template = function () {
    let connectedAddOns = this.props.store.state.roe.connectedAddOns;
    return {
        tagName: 'div',
        classList: ['roe-connected-addons'],
        children: [
            ...connectedAddOns.map(addon => {
                return {
                    tagName: 'div',
                    classList: ['roe-connected-addons__item', 'addon'],
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
                                    classList: ['addon__main-quantity'],
                                    textContent: addon.left + '/' + addon.quantity + ' ' + addon.dimension
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
            })
        ]
    }
}
