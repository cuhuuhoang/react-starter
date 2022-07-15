import React from "react";
import {createPolicy, createClaim, deletePolicy} from './actions'
import {combineReducers, createStore} from "redux";
import {accounting, claimsHistory, policies} from "./reducers";

const Insurance = () => {
  const departments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
  })

  const store = createStore(departments);

  const showState = () => {
    return <div>
      <p>TotalMoney: {store.getState().accounting}</p>
      <p>ClaimsHistory: {store.getState().claimsHistory.map(claimHistory => <span key={claimHistory.name}>{claimHistory.name}-{claimHistory.toClaimAmount} </span>)}</p>
      <p>Policies: {store.getState().policies.map(policy => <span key={policy}>{policy} </span>)}</p>
    </div>;
  }

  const step1 = () => {
    store.dispatch(createPolicy('Alex', 20));
    store.dispatch(createPolicy('Jim', 30));
    store.dispatch(createPolicy('Bob', 40));
    return (
      <div>
        <p>createPolicy('Alex', 20)</p>
        <p>createPolicy('Jim', 30)</p>
        <p>createPolicy('Bob', 40)</p>
      </div>
    );
  }

  const step2 = () => {
    store.dispatch(createClaim('Alex', 120));
    store.dispatch(createClaim('Jim', 50));
    return (
      <div>
        <p>createClaim('Alex', 120)</p>
        <p>createClaim('Jim', 50)</p>
      </div>
    );
  }

  const step3 = () => {
    store.dispatch(deletePolicy('Bob'));
    return (
      <div>
        <p>deletePolicy('Bob')</p>
      </div>
    );
  }

  return (
    <div className="container" style={{marginTop: '10px'}}>
      <h4>Insurance</h4>
      <hr />
      <p>Start with 100$</p>
      <br />
      {showState()}
      <hr />
      {step1()}
      <br />
      {showState()}
      <hr />
      {step2()}
      <br />
      {showState()}
      <hr />
      {step3()}
      <br />
      {showState()}
    </div>
  )
}

export default Insurance