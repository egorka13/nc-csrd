export const template = function () {
    return {
        tagName: 'div',
        classList: ['login'],
        children: [
            {
                tagName: 'div',
                classList: ['login__card', 'card'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['login__header'],
                        textContent: 'Sign in'
                    },
                    {
                        tagName: 'form',
                        attributes: {
                            name: 'login'
                        },
                        events: {
                            onsubmit: this.methods.signIn
                        },
                        classList: ['login__form'],
                        children: [
                            {
                                tagName: 'div',
                                classList: ['login__input', 'input'],
                                children: [
                                    {
                                        tagName: 'div',
                                        classList: ['login__label', 'input__label'],
                                        textContent: 'Email',
                                        children: [
                                            {
                                                tagName: 'input',
                                                attributes: {
                                                    type: 'email',
                                                    name: 'email'
                                                },
                                                classList: ['login__field', 'input__input'],
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                tagName: 'div',
                                classList: ['login__input', 'input'],
                                children: [
                                    {
                                        tagName: 'div',
                                        classList: ['login__label', 'input__label'],
                                        textContent: 'Password',
                                        children: [
                                            {
                                                tagName: 'input',
                                                attributes: {
                                                    type: 'password',
                                                    name: 'password'
                                                },
                                                classList: ['login__field', 'input__input'],
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                tagName: 'div',
                                classList: ['login__footer'],
                                children: [
                                    {
                                        tagName: 'input',
                                        attributes: {
                                            type: 'submit',
                                        },
                                        classList: ['button'],
                                        textContent: 'Sign in'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
