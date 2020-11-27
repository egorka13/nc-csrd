import Circle from './circle/circle.component.js';
import Text from './Text/text.component.js'

export const template = function () {
    return {
        tagName: 'div',
        classList: ['component__ci'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            //new Circle().render(),
            new Text().render()
        ]
    }
}