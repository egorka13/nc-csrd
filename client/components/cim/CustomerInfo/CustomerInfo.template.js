import Title from "./title/title.component";
import Fullname from "./fullname/fullname.component";
import Info from "./info/info.component";
import Property from "./info/property/property.component";
import Value from "./info/value/value.component";

export const template = function () {
    let data = fetch('https://nc-csrd.firebaseio.com/customers').then();
    return {
        tagName: 'div',
        classList: ['cim__customer-info','customer-info'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Title().render(),
            new Fullname(
                [
                    this.store.state.cim.responseCI.secondname,
                    this.store.state.cim.responseCI.firstname,
                    this.store.state.cim.responseCI.patronymic
                ].join(' ')).render(),
            {
                for: Object.keys(this.store.state.cim.responseCI).map((k) => {
                    return [this.store.state.cim.properties[k], this.store.state.cim.responseCI[k]]}),
                tagName: 'div',
                classList: ['customer-info__info', 'info'],
                attributes: {
                    style: ''
                },
                textContent: '',
                children: [
                    {
                        tagName: 'div',
                        classList: ['info__property'],
                        attributes: {
                            style: ''
                        },
                        textContent: '{{item[0]}}',
                        children: []
                    },
                    {
                        tagName: 'div',
                        classList: ['info__value'],
                        attributes: {
                            style: ''
                        },
                        textContent: '{{item[1]}}',
                        children: []
                    },
                ]
            }
        ]
    }
}