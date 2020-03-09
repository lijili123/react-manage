/**
 * Created by Ljili on 2020/1/2.
 */
import {type} from './../action'
const initialState={
  menuName:'首页',
  count:0
}
//reducer 指定了应用应用状态的变化如何响应action并发送到store
export default (state = initialState,action)=>{
  switch (action.type){
    case type.SWICTH_MENU:
      return {
        ...state,
        menuName:action.menuName
      };
    case type.INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case type.DECREASE:
      return {
        ...state,
        count:state.count-1
      }
    default:
      return {
        ...state
      };
  }

}