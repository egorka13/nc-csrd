import RoeOrderLine from "./roe-order-line.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['roe-sales-order', ...this.props.addClassName],
        children: [
            ...Object.entries(this.props.order).map((entry) => {
                return new RoeOrderLine({
                    line: entry,
                    addClassName: ['roe-sales-order__line'],
                }).render()
            })
        ],
    }
}
