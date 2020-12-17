export const template = function () {
    return {
        tagName: 'div',
        classList: ['roe-sales-order__line'],
        children: [
            {
                tagName: 'span',
                classList: ['roe-sales-order__line-type'],
                textContent: this.props.line[0],
            },
            {
                tagName: 'span',
                classList: ['roe-sales-order__line-content'],
                textContent: this.props.line[1],
            }
        ]
    }
}
