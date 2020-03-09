/**
 * Created by Ljili on 2020/1/2.
 */
//action 类型
export const type={
  SWICTH_MENU:'SWICTH_MENU',
  INCREASE:'INCREASE',
  DECREASE:'DECREASE'
}


//action创建函数 只是简单的返回一个action
export function switchMenu(menuName) {
  return {
    type:type.SWICTH_MENU,
    menuName
  }
}

export function increase(count) {
  return {
    type:type.INCREASE,
    count
  }
}
export function decrease() {
  return {
    type:type.DECREASE
  }
}