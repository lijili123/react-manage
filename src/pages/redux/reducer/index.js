/**
 * Created by Ljili on 2020/1/2.
 */
import {type} from './../action'
const initialState={
  menuName:'首页'
}
export default (state = initialState,action)=>{
  switch (action.type){
    case type.SWICTH_MENU:
      return {
        ...state,
        menuName:action.menuName
      };
    default:
      return {
        ...state
      };
  }

}