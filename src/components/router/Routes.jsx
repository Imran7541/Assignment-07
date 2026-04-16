import { createBrowserRouter } from "react-router";
import RootLayout from "../../layout/RootLayout";
import HomePage from "../../pages/homepage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Stats from "../../pages/stats/Stats";
import Timeline from "../../pages/timeline/Timeline";
import FriendDetails from "../../pages/FriendDetails";

 export const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          index:true,
          element:<HomePage/>,
          loader:()=>fetch('/friends.json')
        },
        {
         path:'/friend/:id',
         element:<FriendDetails/>
        },
        {
          path:'/timeline',
          element:<Timeline/>
        },
        {
          path:'/stats',
          element:<Stats/>
        }
      ],
      errorElement:<NotFoundPage/>
    }
  ]
)