import RoeAvailableContent from "./roe-available-content.component";

export const template = function () {
    return {
        tagName: 'section',
        classList: ['roe-available', ...this.props.addClassName],
        children: [
            {
                tagName: 'div',
                classList: ['roe__available-top', 'roe-available-header'],
                children: [
                    {
                        tagName: 'h2',
                        classList: ['roe-available-header__title'],
                        textContent: 'Available Offerings'
                    },
                ],
            },
            new RoeAvailableContent({
                addClassName: ['roe-available__content'],
            }).render(),
        ],
    }
}
