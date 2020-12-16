import RoeConnectedTariff from "./roe-connected-tariff.component";
import RoeAvailableTariff from "./roe-available-tariff.component";

export const template = function () {
    // [tariff] and tariff parameters in constructor
    let tariffs = this.props.tariffs;
    let parameters = this.props.parameters;
    return {
        //if: store.getter('roeGetAvailableCurrentNavTab') === 'Tariffs',//this.props.store.state.roe.availableNav.currentTab === 'Tariffs',
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
                        if (this.props.isConnected) {
                            return new RoeConnectedTariff({
                                addClassName: ['roe-tariff-table__main-item'],
                                tariff: tariff,
                            }).render()
                        } else {
                            return new RoeAvailableTariff({
                                addClassName: ['roe-tariff-table__main-item'],
                                tariff: tariff,
                            }).render()
                        }
                    })
                ]
            }

        ]
    }
}
