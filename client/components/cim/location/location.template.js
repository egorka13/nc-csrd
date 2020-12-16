import Map from "./map/map.component";
import Title from "./title/title.component";
import DefaultLocation from "./defaultLocations/defaultLocations.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['location'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Title().render(),
            new Map().render(),
            new DefaultLocation().render()
        ]
    }
}