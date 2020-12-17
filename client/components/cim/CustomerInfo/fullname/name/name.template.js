
export const template = function (fullname) {
    return {
        tagName: 'div',
        classList: ['fullname__name'],
        attributes: {
            style: ''
        },
        textContent: fullname,
        children: [

        ]
    }
}