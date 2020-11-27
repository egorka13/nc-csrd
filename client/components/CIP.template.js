import SideBar from "./sidebar/sidebar.component";
import Main from "./main/main.component"

export const template = function () {
    return {
        tagName: 'div',
        classList: ['CIP'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new SideBar().render(),
            new Main().render()
        ]
    }
}