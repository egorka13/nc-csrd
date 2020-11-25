import CpmTable from "./cpm-table/table.component.js";
import ProblemInfo from "./problemInfo/problemInfo.component";
import CustomerInfo from "./customerInfo/customerInfo.component";
import SelectForm from "./selectForm/selectForm.component";
import CreateForm from "./createForm/createForm.component";

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
                                textContent: !this.props.data.isCustomer ?
                                                'New session' :
                                                'All tickets',
                                events: {
                                    onclick: !this.props.data.isCustomer ?
                                        () => {
                                            window.router.redirect('/cpm/customer')
                                        } :
                                        () => {
                                            this.props.store.state.cpm.currentCustomer = null;
                                            window.router.redirect('/cpm')
                                        }

                                }
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
                        children: !this.props.data.isCustomer ? [
                            new ProblemInfo().render(),
                            new CustomerInfo().render(),
                        ] : [
                            new SelectForm().render(),
                            new CreateForm().render()
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['cpm__table'],
                        children: [
                            new CpmTable({isCustomer: this.props.data.isCustomer}).render()
                        ]
                    },
                ]
            },
        ]
    }
}