import Button from "./button/button.component.js";
import Value from "./value/value.component.js";

export const template = function () {
    return {
        tagName: 'div',
        classList: ['counter'],
        children: [
            new Button().render(),
            new Value().render()
        ]
    }
}