import Map from "./map/map.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['location'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Map().render()
        ]
    }
}