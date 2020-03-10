/**
 * Created by Ljili on 2020/1/2.
 */
import { createStore,combineReducers } from 'redux'
import reducer from './../reducer'
import addReducer from './../add/reducer'
const reducerAll = combineReducers({
  reducer,
  addReducer
})//组合reducer store.getState() 返回值 {reducer:{},addReducer:{}}

const store=createStore(reducerAll)
export default store