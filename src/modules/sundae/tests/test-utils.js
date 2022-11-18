import React from 'react'
import {render} from '@testing-library/react'
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "../reducers";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";

const AllTheProviders = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)))

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
