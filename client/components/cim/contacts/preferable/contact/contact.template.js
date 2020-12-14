import Type from "./type/type.component";
import Value from "./value/value.component";
export const template = function (contact) {
    return {
        tagName: 'div',
        classList: ['preferable__contact','contact'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Type(contact[0]).render(),
            new Value(contact[1]).render()
        ]
    }
}