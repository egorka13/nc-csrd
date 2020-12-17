export const template = function () {
  let accounts = this.props.store.state.bim.cardsData;
  let params = this.props.store.state.bim.cardsTypes.example
    .availableParameters;
  return {
    tagName: "div",
    classList: [],
    attributes: {
      style: "",
    },
    textContent: " ",
    children: [
      {
        tagName: "h2",
        classList: ["cards__title"],
        textContent: "Payment methods",
      },
      {
        tagName: "h3",
        classList: ["cards"],
        textContent: "",
        children: [
          ...accounts.map((account) => {
            return {
              tagName: "div",
              classList: ["cards__item"],
              children: [
                ...Object.keys(params).map((param) => {
                  return {
                    tagName: "div",
                    classList: ["cards__item-col"],
                    textContent: account[param],
                  };
                }),
                {
                  tagName: "div",
                  textContent: "",
                  classList: ["cards__pic"],
                },
                {
                  tagName: "div",
                  textContent: "PREFERABLE",
                  classList: ["cards__item-text"],
                },
                {
                  tagName: "input",
                  textContent: "",
                  attributes: {
                    style: "",
                    type: "checkbox",
                  },
                  classList: ["cards__item-preferable"],
                },
                {
                  tagName: "button",
                  textContent: "REMOVE",
                  classList: ["cards__item-remove"],
                },
              ],
            };
          }),
        ],
      },
    ],
  };
};
