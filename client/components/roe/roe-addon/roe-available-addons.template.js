import RoeAvailableAddon from "./roe-available-addon.component";

export const template = function () {
    let connectedAddOns = this.props.store.state.roe.connectedAddOns;
    return {
        tagName: 'div',
        classList: ['roe-available-addons'],
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