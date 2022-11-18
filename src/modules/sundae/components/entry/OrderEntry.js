import Options from "./Options";
import {fetchScoops, fetchToppings} from "../../actions";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import OrderTotal from "./OrderTotal";

const OrderEntry = () => {

  return (
    <div>
      <Options form="scoopsForm" fetch={fetchScoops} name="scoops" option={ScoopOption}/>
      <Options form="toppingsForm" fetch={fetchToppings} name="toppings" option={ToppingOption}/>
      <hr />
      <OrderTotal />
    </div>
  )
}

export default OrderEntry
