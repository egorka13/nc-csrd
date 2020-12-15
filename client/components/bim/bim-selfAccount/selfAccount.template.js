import BKeys from "./keys/keys.component";
 import Values from "./values/values.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['billing-info', 'billing-info__info'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new BKeys().render(),
            new Values().render()
        ]
    }
}