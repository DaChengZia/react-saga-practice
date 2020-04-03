import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Company from './Company'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware(rootSaga)

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

const action = type => store.dispatch({type})

sagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(
    <Company
      data={store.getState()}
      handleClick={() => action('GET_RESPONSE')}
     />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
