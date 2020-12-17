import RoeAvailableAddon from "./roe-available-addon.component";

export const template = function () {
    let connectedAddOns = store.getter('roeGetConnectedPackages');//this.props.store.state.roe.connectedAddOns;
    return {
        //if: store.getter('roeGetAvailableCurrentNavTab'),//this.props.store.state.roe.availableNav.currentTab === 'Packages',
        tagName: 'div',
        classList: ['roe-available-addons', ...this.props.addClassName],
        children: [
            {
                tagName: 'div',
                classList: ['roe-available-addons__content'],
                children: [
                    ...connectedAddOns.map(addon => {
                        return new RoeAvailableAddon({
                            addClassName: ['roe-available-addons__content-item'],
                            addon: addon,
                            isConnected: false,
                        }).render()
                    }),
                    ...connectedAddOns.map(addon => {
                        return new RoeAvailableAddon({
                            addClassName: ['roe-available-addons__content-item'],
                            addon: addon,
                            isConnected: false,
                        }).render()
                    }),
                    ...connectedAddOns.map(addon => {
                        return new RoeAvailableAddon({
                            addClassName: ['roe-available-addons__content-item'],
                            addon: addon,
                            isConnected: false,
                        }).render()
                    }),...connectedAddOns.map(addon => {
                        return new RoeAvailableAddon({
                            addClassName: ['roe-available-addons__content-item'],
                            addon: addon,
                            isConnected: false,
                        }).render()
                    }),
                ]
            }
        ],
    }
}