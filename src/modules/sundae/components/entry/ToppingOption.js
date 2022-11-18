import {Field} from "redux-form";
import {checkbox} from "../common/form";

const ToppingOption = ({ item, name }) => {
  return (
    <Field name={`${name}-${item.id}`} component={checkbox} label={`[$${item.price}] ${item.name}`} />
  )
}

export default ToppingOption;

