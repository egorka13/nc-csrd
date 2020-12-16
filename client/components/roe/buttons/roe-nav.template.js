export const template = function () {
    return {
        tagName: 'nav',
        classList: ['roe-nav', ...this.props.addClassName],
        children: [
            {
                for: this.props.store.state.roe.availableNavStates,
                component: 'RoeNavButton',
                arguments: [
                    {
                        addClassName: ['roe-nav__item', 'roe-button'],
                    },
                    '{{item}}',
                ]
            },
        ],
        events: {
            onclick: this.methods.setTab.bind(this)
        }
    }
}
