import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "../reducers";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const Songs = () => {

  const app = () => {
    return (
      <div className="container" style={{marginTop: '10px'}}>
        <div className="row">
          <div className="col-sm-6">
            <SongList />
          </div>
          <div className="col-sm-6">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Provider store={createStore(reducers)}>
      {app()}
    </Provider>
  );
}

export default Songs