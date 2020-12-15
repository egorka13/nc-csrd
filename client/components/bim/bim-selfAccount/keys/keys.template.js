export const template = function () {
  let params = this.props.store.state.bim.selfKeysTypes.example.availableParameters;
  return {
    tagName: "div",
    classList: ["info__keys"],
    children: [
      {
        tagName: "h2",
        classList: ["billing-info__title"],
        textContent: "Billing Account",
      },
      {
        tagName: "div",
        classList: ["info__keys"],
        children: [
          ...Object.values(params).map((value) => {
            return {
              tagName: "div",
              classList: ["info__keys-col"],
              textContent: value,
            };
          }),
        ],
      },
    ],
  };
};
