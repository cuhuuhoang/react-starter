import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import {useEffect, useState} from "react";
import Spinner from "../common/Spinner";
import AlertBanner from "../common/AlertBanner";
import SundaeService from "../../services/sundae.service";
import {round2} from "../../helper";

const Options = (props) => {
  // state properties
  const { info, formValues } = props;
  // input properties
  const { fetch, name, option } = props;

  const [sum, setSum] = useState(0);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    setSum(round2(SundaeService.computePartSum(info, formValues, name)));
  }, [info, formValues]);

  if (info.fetching) {
    return <Spinner text={`Loading ${name}`} />
  }

  if (info.error) {
    return <AlertBanner message={info.error} />
  }

  const rentedOptions = info.data.map(item => {
    return (
      <div key={item.id}>
        {option({item, name})}
      </div>
    )
  });

  return (
    <div className="mt-3">
      <h5>Choose {name}</h5>
      {rentedOptions}
      <h6>Total price of {name} is ${sum}</h6>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const formName = ownProps.name + "Form";
  return {
    info: state[ownProps.name],
    formValues: getFormValues(formName)(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetch: () => dispatch(ownProps.fetch())
  }
}

export default connect
  (mapStateToProps, mapDispatchToProps)
  (reduxForm()(Options));

