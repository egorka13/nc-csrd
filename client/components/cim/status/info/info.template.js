import ID from './id/id.component';
import Name from './name/name.component'

export const template = function () {
    return {
        tagName: 'div',
        classList: ['status__info','info'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new ID().render(),
            new Name().render()
        ]
    }
}