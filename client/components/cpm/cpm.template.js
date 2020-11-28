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
                            // {
                            //     tagName: 'div',
                            //     classList: ['cpm__title-new'],
                            //     textContent: !this.props.data.isCustomer ?
                            //                     'New session' :
                            //                     'All tickets',
                            //     events: {
                            //         onclick: !this.props.data.isCustomer ?
                            //             () => {
                            //                 this.props.store.state.cpm.isCustomerSelected = false;
                            //                 this.props.store.state.cpm.currentTicket = null;
                            //                 window.router.redirect('/cpm/customer')
                            //             } :
                            //             () => {
                            //                 this.props.store.state.cpm.currentCustomer = null;
                            //                 window.router.redirect('/cpm')
                            //             }
                            //
                            //     }
                            // },
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
                            this.components.ProblemInfo
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['cpm__table'],
                        children: [
                            this.components.CpmTable
                        ]
                    },
                ]
            },
        ]
    }
}