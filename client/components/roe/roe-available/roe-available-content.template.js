import RoeNav from "../buttons/roe-nav.component.js";
import RoeAvailableAddons from "../roe-addon/roe-available-addons.component.js";
import RoeTariffTable from "../roe-tariffs/roe-tariff-table.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['roe-available-content', ...this.props.addClassName],
        children: [
            new RoeNav({
                addClassName: ['roe-available-content__nav'],
            }).render(),
            new RoeTariffTable({
                addClassName: ['roe-available-content__item', '_available'],
                tariffs: store.getter('roeGetAvailableTariffs'),//this.props.store.state.roe.availableTariffs,
                parameters: this.props.store.state.roe.availableTariffParameters,
                isConnected: false,
            }).render(),
            new RoeAvailableAddons({
                addClassName: ['roe-available-content__item', '_hidden'],
            }).render(),
        ],
    }
}
