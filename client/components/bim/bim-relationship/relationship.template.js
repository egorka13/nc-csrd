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
                classList: ["relationship-table__item"],
                children: [
                  
                  ...Object.keys(params).map((param) => {
                    return {
                      tagName: "div",
                      classList: ["relationship-table__item-col"],
                      textContent: item[param],
                    };
                  }),
                  {
                    tagName: 'button',
                    textContent: 'edit',
                    classList: ['relationship-table__button']
                },
                ],
              };
            }),
            {
              tagName: "div",
              classList: ["relationship-table__item", "relationship-table__item-header"],
              children: [
                ...Object.values(params).map((value) => {
                  return {
                    tagName: "div",
                    classList: ["relationship-table__item-col"],
                    textContent: value,
                  };
                }),
                {
                    tagName: 'div',
                    textContent: ' mmm ',
                    classList: ['relationship-table__item-empty']
                }
              ],
            },
          ],
        },
      ],
    };
  };
  