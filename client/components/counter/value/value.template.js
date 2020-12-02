export const template = function () {
    let value = this.props.store.state.counter.value;
    return {
        tagName: 'h1',
        classList: ['counter__value'],
        textContent: value + '(' + this.props.num + ')',
        children: []
    }
}