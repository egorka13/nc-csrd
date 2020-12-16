import RoeConnectedTariffs from "../roe-tariffs/roe-connected-tariff.component";
import RoeConnectedAddons from "../roe-addon/roe-connected-addons.component";

export const template = function () {
    return {
        tagName: 'section',
        classList: [...this.props.addClassName],
        children: [
            {
                tagName: 'h2',
                classList: ['roe__sales-header'],
                textContent: 'Sales Orders',
            },
        ]
    }
}
