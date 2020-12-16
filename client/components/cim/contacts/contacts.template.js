import Title from "./title/title.component";
import Preferable from "./preferable/preferable.component";
import Title_Preferable from "./preferable-title/title.component";
export const template = function () {
    let preferable = [];
    let others = [];
    this.props.store.state.cim.responseCM.response.map((contact) => {
        if (contact[2] === '1') {
            preferable.push(contact)
        } else {
            others.push(contact)        }
    })
    return {
        tagName: 'div',
        classList: ['cim__contacts','contacts'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Title().render(),
            new Title_Preferable().render(),
            new Preferable(preferable).render()
        ]
    }
}