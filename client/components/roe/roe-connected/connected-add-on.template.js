import RoeAddon from "../roe-addon/roe-addon.component";

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
                        return new RoeAddon({
                            addClassName: ['roe-addons__container-item'],
                            addon: addon,
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
