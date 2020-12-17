import Component from "../../../modules/component/component.js";
import store from "../../../store/index.js";
import { template } from "./table.template.js";

export default class BimTable extends Component {
  constructor() {
    super({
      store,
    });
  }

  render() {
    return this.compile(template.call(this));
  }
}
