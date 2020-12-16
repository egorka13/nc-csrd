import Contact from "./contact/contact.component";

export const template = function (preferable) {

    return {
        tagName: 'div',
        classList: ['contacts__preferable','preferable'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: preferable.map((arr)=>new Contact(arr).render())
    }
}