import Name from "./name/name.component";
import Text from "./text/text.component";

export const template = function (fullname) {
    return {
        tagName: 'div',
        classList: ['customer-info__fullname','fullname'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Text().render(),
            new Name(fullname).render()
        ]
    }
}