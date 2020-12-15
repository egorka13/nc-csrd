

export const template = function () {
    return {
        tagName: 'div',
        classList: ['counter'],
        children: [
            {
                if: true,
                component: 'button',
            },
            {
                if: true,
                for: [1,2,3,4,5],
                component: 'value',
                arguments: [
                    '{{item}}'
                ]
            }
        ]
    }
}