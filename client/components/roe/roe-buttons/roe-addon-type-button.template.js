export const template = function () {
    return {
        tagName: 'button',
        classList: ['roe-package-type-button', ...this.props.addClassName],
        textContent : this.props.packageType[1],
        events: {
            onclick: this.methods.showOfType.bind(this),
        }
    }
}
