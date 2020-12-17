import RoeConfirmConnection from "../roe-buttons/roe-confirm-connection.component";

export const template = function () {
    let tariff = this.props.tariff;
    let parameters = this.props.store.state.roe.availableTariffParameters;
    return {
        tagName: 'div',
        classList: ['roe-tariff', ...this.props.addClassName],
        children: [
            ...Object.keys(parameters).map(parameter => {
                if (parameter === 'button') {
                    return new RoeConfirmConnection({
                        addClassName: ['roe-tariff__item'],
                        offering: tariff,
                    }).render()
                } else {
                    return {
                        tagName: 'span',
                        classList: ['roe-tariff__item'],
                        textContent: tariff[parameter].quantity + ' ' + tariff[parameter].dimension
                    }
                }
            }),
        ]
    }
}
