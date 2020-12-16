import RoeTariffTable from "../roe-tariffs/roe-tariff-table.component";
import RoeConnectedAddons from "../roe-addon/roe-connected-addons.component";

export const template = function () {
    return {
        tagName: 'section',
        classList: ['roe-connected-content', ...this.props.addClassName],
        children: [
            {
                tagName: 'h2',
                classList: ['roe-connected-content__header'],
                textContent: 'Connected Offerings'
            },
            new RoeTariffTable({
                addClassName: ['roe-connected-content__tariff'],
                tariffs: store.getter('roeGetConnectedTariff'),//this.props.store.state.roe.connectedTariff,
                parameters: this.props.store.state.roe.connectedTariffParameters,
                isConnected: true,
            }).render(),
            new RoeConnectedAddons({
                addClassName: ['roe-connected-content__addons', '_showFog']
            }).render(),
        ],
    }
}
