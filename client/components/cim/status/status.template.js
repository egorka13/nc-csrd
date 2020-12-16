import Title from "./title/title.component";
import Info from "./info/info.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['cim__status','status'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Title().render(),
            new Info().render()
        ]
    }
}