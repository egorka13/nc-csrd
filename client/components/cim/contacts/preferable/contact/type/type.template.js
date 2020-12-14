
export const template = function (type) {
    return {
        tagName: 'div',
        classList: ['contact__type','type'],
        attributes: {
            style: ''
        },
        textContent: type,
        children: [

        ]
    }
}