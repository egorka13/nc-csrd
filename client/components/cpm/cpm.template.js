import CpmForm from "./cpm-form/form.component.js";
import CpmTable from "./cpm-table/table.component.js";
import ProblemInfo from "./problemInfo/problemInfo.component";
import CustomerInfo from "./customerInfo/customerInfo.component";

export const template = function(){



    return {
        tagName: 'div',
        classList: ['cpm'],
        children: [
            {
                tagName: 'div',
                classList: ['cpm__header'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm__title'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['cpm__title-name'],
                                textContent: 'Customer problem management',
                            },
                            {
                                tagName: 'div',
                                classList: ['cpm__title-new'],
                                textContent: 'New session',
                            },
                        ]
                    },
                ]
            },
            {
                tagName: 'div',
                classList: ['cpm__content'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['cpm__info'],
                        children: [
                            // new CpmForm().render
                            new ProblemInfo().render(),
                            new CustomerInfo().render(),
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
            },
        ]
    }
}