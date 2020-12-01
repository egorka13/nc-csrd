import store from "../../../store";

export const template = function () {
    let connectedTariff = this.props.store.state.roe.connectedTariff;
    let parameters = this.props.store.state.roe.tariffParameters;
    return {
        tagName: 'div',
        classList: ['roe-tariff'],
        children: [
            {
                tagName: 'div',
                classList: ['roe-tariff__parameters'],
                children: [
                    ...Object.values(parameters).map(parameter => {
                        return {
                            tagName: 'span',
                            classList: ['roe-tariff__parameters-item'],
                            textContent: parameter
                        }
                    })
                ]
            },
            {
                tagName: 'div',
                classList: ['roe-tariff__content'],
                children: [
                    ...Object.keys(parameters).map(parameter => {
                        return {
                            tagName: 'span',
                            classList: ['roe-tariff__content-item'],
                            textContent: connectedTariff[parameter].quantity + ' ' + connectedTariff[parameter].dimension
                        }
                    })
                ]
            }
        ]
    }
}
