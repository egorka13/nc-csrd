import RoeSalesOrder from "./roe-sales-order.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['roe-sales-orders', ...this.props.addClassName],
        children: [
            ...store.getter('roeGetOrders').map((order) => {
                return new RoeSalesOrder({
                    order: order,
                    addClassName: ['roe-sales-orders__item'],
                }).render()
            })
        ]
    }
}
