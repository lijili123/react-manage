/**
 * Created by Ljili on 2020/1/2.
 */
export const type={
  SWICTH_MENU:'SWICTH_MENU'
}
export function switchMenu(menuName) {
  return {
    type:type.SWICTH_MENU,
    menuName
  }
}