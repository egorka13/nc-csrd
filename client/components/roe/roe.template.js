import RoeConnectedAddons from './roe-addon/roe-connected-addons.component.js';
import RoeAddonTypeButton from "./buttons/roe-addon-type-button.component";
//import RoePhone from "./roe-available/roe-available-phone.component";
import RoeSalesOrders from "./salesOrders/sales-orders.component";
import RoeTariffTable from "./roe-tariffs/roe-tariff-table.component";
import RoeAvailableAddons from "./roe-addon/roe-available-addons.component";

export const template = function () {
    let availablePhones = this.props.store.state.roe.availablePhones;
    return {
        tagName: 'div',
        classList: ['roe'],
        children: [
            {
                tagName: 'h1',
                classList: ['roe__header'],
                textContent: 'Product Management',
            },
            {
                tagName: 'section',
                classList: ['roe__connected'],
                children: [
                    {
                        tagName: 'h2',
                        classList: ['roe__connected-header'],
                        textContent: 'Connected Offerings'
                    },
                    new RoeTariffTable({
                        addClassName: ['roe__connected-tariff'],
                        tariffs: this.props.store.state.roe.connectedTariff,
                        parameters: this.props.store.state.roe.connectedTariffParameters,
                        isConnected: true,
                    }).render(),
                    new RoeConnectedAddons({
                        addClassName: ['roe__connected-addons', '_showFog']
                    }).render(),
                ]
            },

            {
                tagName: 'section',
                classList: ['roe__available'],
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
                            //TODO nav buttons
                        ]

                    },
                    new RoeTariffTable({
                        addClassName: ['roe__available-tariffs'],
                        tariffs: this.props.store.state.roe.availableTariffs,
                        parameters: this.props.store.state.roe.availableTariffParameters,
                        isConnected: false,
                    }).render(),
                    // =================AVAILABLE=PACKAGES=================
                    // {
                    //     tagName: 'div',
                    //     classList: ['roe__available-packages', 'roe-available-packages'],
                    //     children: [
                    //         new RoeAddonTypeButton(
                    //             {
                    //                 addClassName: ['roe-button', 'roe-available-packages__button'],
                    //                 packageType: ['sms', 'SMS'],
                    //             }).render(),
                    //         new RoeAddonTypeButton(
                    //             {
                    //                 addClassName: ['roe-button', 'roe-available-packages__button'],
                    //                 packageType: ['gbInternet', 'Mobile Internet'],
                    //             }).render(),
                    //         new RoeAddonTypeButtonComponent(
                    //             {
                    //                 addClassName: ['roe-button', 'roe-available-packages__button'],
                    //                 packageType: ['gbCloud', 'Cloud Storage'],
                    //             }).render(),
                    //         new RoeAddonTypeButton(
                    //             {
                    //                 addClassName: ['roe-button', 'roe-available-packages__button'],
                    //                 packageType: ['minutes', 'Voice Line'],
                    //             }).render(),
                    //         new RoeAvailableAddons({
                    //             addClassName: ['roe-available-packages__addons']
                    //         }).render(),
                    //     ]
                    // },
                    //=================AVAILABLE=PACKAGES=END=============

                    //=================AVAILABLE=PHONES==================
                    // {
                    //     tagName: 'div',
                    //     classList: ['roe-available-phones'],
                    //     children: [
                    //         {
                    //             tagName: 'div',
                    //             classList: ['roe-available-phones__content'],
                    //             children: [
                    //                 ...availablePhones.map(phone => {
                    //                     return new RoePhone({
                    //                         addClassName: ['roe-available-phones__content-item'],
                    //                         phone: phone,
                    //                     }).render()
                    //                 }),
                    //             ]
                    //         }
                    //     ],
                    // },
                ]
            },
            new RoeSalesOrders({
                addClassName: ['roe__sales']
            }).render(),
        ]
    }
}
