export const template = function () {
    let tariff = this.props.tariff;
    let parameters = this.props.store.state.roe.connectedTariffParameters;
    console.dir(tariff);
    return {
        tagName: 'div',
        classList: ['roe-tariff', ...this.props.addClassName],
        children: [
            ...Object.keys(parameters).map(parameter => {
                return {
                    tagName: 'span',
                    classList: ['roe-tariff__item'],
                    textContent: tariff[parameter + 'Left'].quantity
                        + tariff[parameter + 'Left'].dimension
                        + tariff[parameter].quantity
                        + ' ' + tariff[parameter].dimension
                }
            })
        ]
    }
}
