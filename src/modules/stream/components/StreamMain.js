import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamHeader from "./StreamHeader";
import history from "../../../history";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reducers from "../reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

const StreamMain = () => {
  return (
    <Provider store={store}>
      <div className="container mt-2">
        <Router history={history}>
          <div>
            <StreamHeader />
            <Switch>
              <Route path="/streams/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/delete/:id" exact component={StreamDelete} />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  )
}

export default StreamMain