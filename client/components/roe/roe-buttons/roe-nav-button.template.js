export const template = function () {
    return {
        tagName: 'button',
        classList: ['roe-nav-button', ...this.props.addClassName],
        textContent : this.props.buttonName,
    }
}
