  export const template = function () {
    let relationshipData = this.props.store.state.bim.relationshipData;
    let params =  this.props.store.state.bim.relationshipTypes.example.availableParameters;
    return {
      tagName: "div",
      classList: ["relationship-table"],
      children: [
        {
          tagName: "div",
          classList: ["relationship-table__list"],
          children: [
            ...relationshipData.map((item) => {
              return {
                tagName: "div",
                classList: ["relationship-table__ticket"],
                children: [
                  
                  ...Object.keys(params).map((param) => {
                    return {
                      tagName: "div",
                      classList: ["relationship-table__ticket-col"],
                      textContent: item[param],
                    };
                  }),
                  {
                    tagName: 'button',
                    textContent: 'edit',
                    // events: {
                    //     onclick: this.actions.loadBimInf
                    // },
                    classList: ['relationship-table__button']
                },
                ],
              };
            }),
            {
              tagName: "div",
              classList: ["relationship-table__ticket", "relationship-table__ticket__header"],
              children: [
                ...Object.values(params).map((value) => {
                  return {
                    tagName: "div",
                    classList: ["relationship-table__ticket-col"],
                    textContent: value,
                  };
                }),
                {
                    tagName: 'div',
                    textContent: ' mmm ',
                    // events: {
                    //     onclick: this.methods.loadBimTransaction
                    // },
                    classList: ['relationship-table__ticket__header-empty']
                }
              ],
            },
          ],
        },
      ],
    };
  };
  