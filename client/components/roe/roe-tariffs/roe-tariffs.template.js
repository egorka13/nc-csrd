export const template = function () {
    let tariffs = this.props.tariffs;
    let parameters = this.props.store.state.roe.tariffParameters;
    return {
        tagName: 'div',
        classList: ['roe-tariff-table', ...this.props.addClassName],
        children: [
            {
                tagName: 'div',
                classList: ['roe-tariff-table__parameters'],
                children: [
                    ...Object.values(parameters).map(parameter => {
                        return {
                            tagName: 'span',
                            classList: ['roe-tariff-table__parameters-item'],
                            textContent: parameter
                        }
                    })
                ]
            },
            {
                tagName: 'div',
                classList: ['roe-tariff-table__main'],
                children: [
                    ...tariffs.map((tariff) => {
                        return {
                            tagName: 'div',
                            classList: ['roe-tariff-table__main-item', 'roe-tariff'],
                            children: [
                                ...Object.keys(parameters).map(parameter => {
                                    return {
                                        tagName: 'span',
                                        classList: ['roe-tariff__item'],
                                        textContent: tariff[parameter].quantity + ' ' + tariff[parameter].dimension
                                    }
                                })
                            ]
                        }
                    })
                ]
            }

        ]
    }
}
