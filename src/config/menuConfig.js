const menuList = [
  // {
  //   title: '首页',
  //   key: '/home'
  // },
  // {
  //   title: '列表',
  //   key: '/list'
  // },
  // {
  //   title: '关于我们',
  //   key: '/about',
  //   children:[
  //     {
  //       title: '关于我们1',
  //       key: '/about1',
  //     },
  //     {
  //       title: '关于我们2',
  //       key: '/about2',
  //     }
  //   ]
  // },
  {
    name: "首页",
    path: "/home"
  },
  {
    name: "列表",
    path: "/home/list"
  },
  {
    name: "关于我们",
    path: "/about",
    children: [
      {
        name: "关于我们1",
        path: "/about1"
      },
      {
        name: "关于我们2",
        path: "/about2"
      }
    ]
  }
];
// let menus=JSON.parse(window.sessionStorage.getItem('menus'))
// function formatMenus(data) {
//   data.forEach(item=>{
//     if(item.children.length>0){
//       formatMenus(item.children)
//     }else{
//       delete item.children
//     }
//   })
//   return data
// }
// let data=formatMenus(menus)
// const menuDatas=[...menuList,...data]
export default menuList;
