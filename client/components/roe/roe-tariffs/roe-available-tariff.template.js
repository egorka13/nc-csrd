export const template = function () {
    let tariff = this.props.tariff;
    let parameters = this.props.store.state.roe.availableTariffParameters;
    return {
        tagName: 'div',
        classList: ['roe-tariff', ...this.props.addClassName],
        children: [
            ...Object.keys(parameters).map(parameter => {
                if (parameter == 'button') {
                    console.log('PARAMETER = ', parameter);
                    return {
                        tagName: 'button',
                        classList: ['roe-tariff__item', 'roe-button'],
                        textContent: tariff[parameter].quantity,
                    }
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
