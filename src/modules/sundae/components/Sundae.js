import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import history from "../../../history";
import reducers from "../reducers";
import reduxThunk from "redux-thunk";
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderEntry from "./entry/OrderEntry";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

const Sundae = () => {
  return (
    <Provider store={store}>
      <div className="container mt-2">
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/sundaes" component={OrderEntry} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default Sundae
