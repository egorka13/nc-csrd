import Component from "../../../modules/component/component.js";
import store from "../../../store/index.js";
import { template } from "./cards.template.js";

export default class PaymentTable extends Component {
  constructor() {
    super({
      store,
    });
  }

  render() {
    return this.compile(template.call(this));
  }
}
