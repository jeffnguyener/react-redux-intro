import { createStore, applyMiddleware } from 'redux'
import userReducer from './userReducer'
import promiseMiddware from 'redux-promise-middleware'

export default createStore(userReducer, applyMiddleware(promiseMiddware))