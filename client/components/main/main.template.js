import CPM from "../cpm/cpm.component.js";

export const template = function(){
    return {
        tagName: 'div',
        classList: ['main'],
        children: [
            {
                tagName: 'nav',
                classList: ['navbar'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['navbar__title'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['navbar__logo'],
                            },
                            {
                                tagName: 'div',
                                classList: ['navbar__title-name'],
                                textContent: 'NC :: CSRDesktop'
                            },
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['navbar__user'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['navbar__username']
                            },
                            {
                                tagName: 'div',
                                classList: ['navbar__avatar']
                            },
                        ]
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['page'],
                children: [
                    new CPM().render(),
                ]
            }
        ]
    }
}