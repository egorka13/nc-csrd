import CustomerInfo from "./CustomerInfo/CustomerInfo.component";
import Location from "./location/location.component";

export const template = function(){
    return {
        tagName: 'div',
        classList: ['main'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new CustomerInfo().render(),
            new Location().render(),
        ]
    }
}