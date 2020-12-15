import RoeConnectedTariff from './roe-connected/connected-tariff.component.js';
import RoeConnectedAddons from './roe-connected/connected-add-on.component.js';
//import RoeAvailableTariffs from './roe-available/available-tariffs.component.js';

export const template = function(){
    return {
        tagName: 'div',
        classList: ['roe'],
        children: [
            {
                tagName: 'h1',
                classList: ['roe__header'],
                textContent: 'Product Managment',
            },
            {
                tagName: 'section',
                classList: ['roe__connected'],
                children: [
                    {
                        tagName: 'h2',
                        classList: ['roe__connected-header'],
                        textContent: 'Connected Services'
                    },
                    {
                        tagName: 'div',
                        classList: ['roe__connected-tariff'],
                        children: [
                            new RoeConnectedTariff().render()
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['roe__connected-addons'],
                        children: [
                            new RoeConnectedAddons().render()
                        ]
                    }
                ]
            },
            // {
            //     tagName: 'section',
            //     classList: ['roe__available'],
            //     children: [
            //         {
            //             tagName: 'h2',
            //             classList: ['roe__available-header'],
            //             textContent: 'Available Services'
            //         },
            //         {
            //             tagName: 'div',
            //             classList: ['roe__available-tariffs'],
            //             children: [
            //                 new RoeAvailableTariffs().render()
            //             ]
            //         },
            //     ]
            // }
        ]
    }
}
