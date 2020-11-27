import CpmForm from "./cpm-form/form.component.js";
import CpmTable from "./cpm-table/table.component.js";

export const template = function(){
    return {
        tagName: 'div',
        classList: ['cpm'],
        children: [
            {
                tagName: 'div',
                classList: ['cpm__content'],
                children: [
                    new CpmForm().render()
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm__table'],
                children: [
                    new CpmTable().render()
                ]
            },
        ]
    }
}