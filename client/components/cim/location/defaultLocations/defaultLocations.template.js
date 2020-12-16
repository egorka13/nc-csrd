import Location from "./location/location.component";

export const template = function () {
    let counter = 0;
    let children = this.props.store.state.cim.responseCL.response;

    return {
        tagName: 'div',
        classList: ['location__default','default'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: children.map((arg)=>{
            let result = new Location(arg,counter).render();
            counter ++;
            return result
        })
    }
}