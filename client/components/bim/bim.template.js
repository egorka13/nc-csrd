import BimTable from "./bim-table/table.component.js";
import SelfTable from "./bim-selfAccount/selfAccount.component";
import Title from "./title/title.component.js";
import RelationshipTable from "./bim-relationship/relationship.component.js";
// import PaymentTable from "./cards/cards.component.js";
export const template = function () {
  return {
    tagName: "div",
    classList: ["bim"],
    children: [
      new Title().render(),

      new SelfTable().render(),

      new BimTable().render(),

      new RelationshipTable().render(),

      // new PaymentTable().render(),
    ],
  };
};
