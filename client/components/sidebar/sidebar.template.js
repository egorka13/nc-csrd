import Top from './sidebar-components/component-top/top.component.js'
import CI from './sidebar-components/CI/ci.component.js'

export const template = function () {
    return {
        tagName: 'div',
        classList: ['sidebar'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Top().render(),
            new CI().render()
        ]
    }
}