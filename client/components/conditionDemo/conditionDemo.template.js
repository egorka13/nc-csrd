export const template = function () {
    return {
        tagName: 'div',
        classList: ['card'],
        attributes: {
            style: 'margin: 40px; width: 60px; height: 280px; padding: 50px;'
        },
        events: {
            // onclick: this.methods.makeSth
        },
        textContent: '',
        children: [
            {
                if: true,
                for: this.data().arr,
                tagName: 'h3',
                attributes: {
                    style: 'color: black'
                },
                events: {
                    // onclick: this.methods.makeSth
                },
                textContent: '{{item * item}}',
                children: [

                ]
            }
        ]
    }
}