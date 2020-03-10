/**
 * Created by Ljili on 2020/3/10.
 */
import {type} from './action.js'
const initState={
  num:0,
}
export default (state=initState,action)=>{
  switch (action.type){
    case type.ADD:
      return {
        ...state,
        num:state.num+2
      }
      break;
    default :
      return {
        ...state
      }
  }
}