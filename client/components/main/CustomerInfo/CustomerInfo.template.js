import Title from "./title/title.component";
import Fullname from "./fullname/fullname.component";
import Info from "./info/info.component";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['main__customer-info','customer-info'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Title().render(),
            new Fullname().render(),
            new Info().render(),
            new Info().render(),
            new Info().render(),
            new Info().render(),
            new Info().render(),
            new Info().render(),
            new Info().render(),
        ]
    }
}