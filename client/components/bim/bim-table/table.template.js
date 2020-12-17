export const template = function () {
  let transactions = this.props.store.state.bim.tranactionData;
  let params = this.props.store.state.bim.transactionTypes.example
    .availableParameters;
  return {
    tagName: "div",
    classList: ["table"],
    children: [
      {
        tagName: "h2",
        classList: ["table__title"],
        textContent: "Transactions",
      },
      {
        tagName: "button",
        textContent: "Date from ▼",
        classList: ["table__header-button"],
      },
      {
        tagName: "button",
        textContent: "Date to ▼",
        classList: ["table__header-button"],
      },
      {
        tagName: "button",
        textContent: "Type ▼",
        classList: ["table__header-button"],
      },
      {
        tagName: "button",
        textContent: "Payment method ▼",
        classList: ["table__header-button"],
      },
      {
        tagName: "button",
        textContent: "Status ▼",
        classList: ["table__header-button"],
      },
      {
        tagName: "button",
        textContent: "Reset",
        classList: ["table__header-reset"],
      },
      {
        tagName: "div",
        classList: ["table__list"],
        children: [
          ...transactions.map((transaction) => {
            return {
              tagName: "div",
              classList: ["table__item"],
              children: [
                ...Object.keys(params).map((param) => {
                  return {
                    tagName: "div",
                    classList: ["table__item-col"],
                    textContent: transaction[param],
                  };
                }),
                {
                  tagName: "button",
                  textContent: "Reopen",
                  classList: ["table__button"],
                },
              ],
            };
          }),
          {
            tagName: "div",
            classList: ["table__item", "table__header"],
            children: [
              ...Object.values(params).map((value) => {
                return {
                  tagName: "div",
                  classList: ["table__item-col"],
                  textContent: value,
                };
              }),
              {
                tagName: "div",
                textContent: " mmmmm ",
                classList: ["table__header-empty"],
              },
            ],
          },
        ],
      },
    ],
  };
};
