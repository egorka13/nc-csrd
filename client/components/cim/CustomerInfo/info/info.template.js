import Property from "./property/property.component";
import Value from "./value/value.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['customer-info__info','info'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Property().render(),
            new Value().render()
        ]
    }
}