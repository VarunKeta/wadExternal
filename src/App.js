import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import RootLayout from './components/wadExternal/RootLayout'
import Home from "./components/wadExternal/Home"
import SignIn from "./components/wadExternal/SignIn"
import SignUp from "./components/wadExternal/SignUp"
import Product from "./components/wadExternal/Product"
import AboutUs from "./components/wadExternal/AboutUs"
import Kart from "./components/wadExternal/Kart"

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'signin',
          element:<SignIn/>
        },
        {
          path:'aboutUs',
          element:<AboutUs/>
        },
        {
          path:'signup',
          element:<SignUp/>
        },
        {
          path:'kart',
          element:<Kart/>
        },
        {
          path:'product/:title',
          element:<Product/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;