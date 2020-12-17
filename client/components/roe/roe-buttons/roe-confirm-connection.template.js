export const template = function () {
    return {
        tagName: 'button',
        classList: ['roe-confirm-connection', 'roe-button', ...this.props.addClassName],
        textContent: 'Connect',
        events: {
            onclick: (function () {
                if (this.element.classList.contains('addon__header-button')) {
                    this.props.store.dispatch('confirm', {
                        text: 'Are you sure you want to connect? Package: PlusUltra',
                        action: 'roeConnectionExample'
                    });
                }

                if (this.element.classList.contains('roe-tariff__item')) {
                    this.props.store.dispatch('confirm', {
                        text: 'Are ypu sure you want to connect?',
                        action: 'roeConfirmConnection'
                    });
                }

            }).bind(this)
        },
    }
}
