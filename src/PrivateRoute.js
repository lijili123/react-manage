/**
 * Created by Ljili on 2019/12/31.
 */
import React from 'react'
import { Route,Redirect } from 'react-router-dom'
// function PrivateRoute(props) {
//   let {user,children,...rest}=props
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login"
//             }}
//           />
//         )
//       }
//     />
//   );
// }
function PrivateRoute(props) {
  let {user,children,...rest}=props
  let component=user?<Route {...rest}/>: <Redirect to="/login"/>
  return  component
}
export default PrivateRoute
