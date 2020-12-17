import RoeSalesOrders from "./roe-sales-orders.component";

export const template = function () {
    return {
        tagName: 'section',
        classList: ['roe-sales', ...this.props.addClassName],
        children: [
            {
                tagName: 'h2',
                classList: ['roe-sales__header'],
                textContent: 'Sales Orders',
            },
            new RoeSalesOrders({
                addClassName: ['roe-sales__main'],
            }).render(),
        ],
    }
}
