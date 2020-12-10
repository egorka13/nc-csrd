import RoeConnectedAddons from './roe-connected/connected-add-on.component.js';
import RoeTariffs from './roe-tariffs/roe-tariffs.component.js';

export const template = function () {
    return {
        tagName: 'div',
        classList: ['roe'],
        children: [
            {
                tagName: 'h1',
                classList: ['roe__header'],
                textContent: 'Product Management',
            },
            {
                tagName: 'section',
                classList: ['roe__connected'],
                children: [
                    {
                        tagName: 'h2',
                        classList: ['roe__connected-header'],
                        textContent: 'Connected Offerings'
                    },
                    new RoeTariffs({
                        addClassName: ['roe__connected-tariff'],
                        tariffs: this.props.store.state.roe.connectedTariff
                    }).render(),
                    new RoeConnectedAddons({
                        addClassName: ['roe__connected-addons', '_showFog']
                    }).render(),
                ]
            },
            {
                tagName: 'section',
                classList: ['roe__available'],
                children: [
                    {
                        tagName: 'h2',
                        classList: ['roe__available-header'],
                        textContent: 'Available Offerings'
                    },
                    new RoeTariffs(
                        {
                            addClassName: ['roe__available-tariffs'],
                            tariffs: this.props.store.state.roe.availableTariffs
                        }).render(),
                ]
            }
        ]
    }
}
