export const template = function () {
         let accounts = this.props.store.state.bim.selfValuesData;;
         let params =  this.props.store.state.bim.selfKeysTypes.example.availableParameters;
    return {
        tagName: 'div',
        classList: ['info__values'],
        attributes: {
            style: ''
        },
         textContent: ' ',
        children: [
            ...accounts.map((account) => {
                return {
                  tagName: "div",
                  classList: ["info__values"],
                  children: [
                      
                    ...Object.keys(params).map((param) => {
                      return {
                        tagName: "div",
                        classList: ["info__values-col"],
                        textContent: account[param],
                        
                      };
                    }),
                  ],
                };
              }),
        ]
    }
}