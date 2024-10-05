import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import {Auth, Error, Users} from "@pages"

const index = ()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route index element={<Auth />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<Error />} />
          </Route>
        )
      );
      return <RouterProvider router={router} />;
}

export default index;