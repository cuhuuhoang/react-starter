import React from "react";
import {Provider} from "react-redux";
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers";
import PostList from "./PostList";

const Blog = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="container" style={{marginTop: '10px'}}>
        <PostList />
      </div>
    </Provider>
  );
}

export default Blog