import CustomerInfo from "./CustomerInfo/CustomerInfo.component";
import Location from "./location/location.component";
import Sidebar from "../main/sidebar/sidebar.component";
import Docs from "./docs/docs.component";
import Contacts from './contacts/contacts.component'
import Status from "./status/status.component";

export const template = function(){
    this.props.store.getters.getItems();
    return {
        tagName: 'div',
        classList: ['cim'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            //new Sidebar().render(),
            new CustomerInfo().render(),
            new Location().render(),
            {
              tagName: 'div',
              classList: ['wrapper'],
              attributes: {
                  style: 'display:inline-block;' +
                      'width:30%;' +
                      'margin-left:2%'
              },
              textContent: '',
                children: [
                    new Contacts().render(),
                    new Status().render()
                ]
            },
            new Docs().render(),
        ]
    }
}