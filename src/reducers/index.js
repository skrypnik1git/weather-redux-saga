import { createStore, applyMiddleware } from "redux";
import { reducer } from './mainReducer'
import createSagaMiddleware from 'redux-saga'
import watchDataRequest from "../sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchDataRequest)