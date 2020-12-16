import RoeConnectedAddon from "./roe-connected-addon.component.js";

export const template = function () {
    let connectedAddOns = this.props.store.state.roe.connectedAddOns;
    return {
        tagName: 'div',
        classList: ['roe-addons', ...this.props.addClassName],
        children: [
            {
                tagName: 'div',
                classList: ['roe-addons__container'],
                children: [
                    ...connectedAddOns.map(addon => {
                        return new RoeConnectedAddon({
                            addClassName: ['roe-addons__container-item'],
                            addon: addon,
                            isConnected: true,
                        }).render()
                    })
                ],
                events: {
                    onscroll: this.methods.fog.bind(this)
                }
            }
        ],
    }
}
