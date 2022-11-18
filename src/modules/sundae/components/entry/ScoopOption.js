import {Field} from "redux-form";
import {numberInput} from "../common/form";

const ScoopOption = ({ item, name }) => {
  return (
    <Field name={`${name}-${item.id}`} component={numberInput} label={`[$${item.price}] ${item.name}`} />
  )
}

export default ScoopOption;

