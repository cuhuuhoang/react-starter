import {getFormValues} from "redux-form";
import SundaeService from "../../services/sundae.service";
import {round2} from "../../helper";
import {connect} from "react-redux";

const OrderTotal = (props) => {

  // state properties
  const {scoops, scoopsFormValues, toppings, toppingsFormValues} = props;

  const sum =
    SundaeService.computePartSum(scoops, scoopsFormValues, 'scoops') +
    SundaeService.computePartSum(toppings, toppingsFormValues, 'toppings')

  return (
    <div className="mt-3">
      <h5>Total order price: ${round2(sum)}</h5>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    scoops: state.scoops,
    scoopsFormValues: getFormValues('scoopsForm')(state),
    toppings: state.toppings,
    toppingsFormValues: getFormValues('toppingsForm')(state),
  }
}

export default connect(mapStateToProps)(OrderTotal);
