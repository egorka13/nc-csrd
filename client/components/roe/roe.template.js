import RoeSalesOrders from "./salesOrders/sales-orders.component";
//import RoeAvailableContent from "./roe-available/roe-available-content.component";
import RoeConnected from "./roe-connected/roe-connected.component";
import RoeAvailable from "./roe-available/roe-available.component";

export const template = function () {
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
              tegName: 'div',
              classList: ['roe__main', 'roe-main'],
              children: [
                  {
                      tagName: 'div',
                      classList: ['roe-main__column'],
                      children: [
                          new RoeConnected({
                              addClassName: ['roe__connected', 'roe-main__column-row'],
                          }).render(),
                          new RoeAvailable({
                              addClassName: ['roe__available', 'roe-main__column-row']
                          }).render(),
                      ]
                  },
                  {
                      tagName: 'div',
                      classList: ['roe-main__column'],
                      children: [
                          new RoeSalesOrders({
                              addClassName: ['roe__sales', 'roe-main__column-row']
                          }).render(),
                      ]
                  }
              ]
            },
                    // {
                    //     tagName: 'section',
                    //     classList: ['roe__connected'],
                    //     children: [
                    //         new RoeConnected({
                    //             addClassName: ['roe__connected-content'],
                    //         }).render(),
                    //     ]
                    // },
            // {
            //     tagName: 'section',
            //     classList: ['roe__connected'],
            //     children: [
            //         {
            //             tagName: 'h2',
            //             classList: ['roe__connected-header'],
            //             textContent: 'Connected Offerings'
            //         },
            //         new RoeTariffTable({
            //             addClassName: ['roe__connected-tariff'],
            //             tariffs: this.props.store.state.roe.connectedTariff,
            //             parameters: this.props.store.state.roe.connectedTariffParameters,
            //             isConnected: true,
            //         }).render(),
            //         new RoeConnectedAddons({
            //             addClassName: ['roe__connected-addons', '_showFog']
            //         }).render(),
            //     ]
            // },
                    //new RoeAvailable({
                    //    addClassName: ['roe__available']
                    //}).render(),
            // {
            //     tagName: 'section',
            //     classList: ['roe__available'],
            //     children: [
            //         {
            //             tagName: 'div',
            //             classList: ['roe__available-top', 'roe-available-header'],
            //             children: [
            //                 {
            //                     tagName: 'h2',
            //                     classList: ['roe-available-header__title'],
            //                     textContent: 'Available Offerings'
            //                 },
            //                 //TODO nav buttons
            //             ]
            //
            //         },
            //         new RoeAvailableContent({
            //             addClassName: ['roe__available-content'],
            //         }).render(),
            //     ]
            // },


            // new RoeSalesOrders({
            //     addClassName: ['roe__sales']
            // }).render(),
        ]
    }
}
