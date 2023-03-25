import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import './index.css'
import { App } from "./routes/App";
import { User ,
    loader as userLoader
} from "./routes/User";
import { Users } from "./routes/UserList";
import {loader} from "./routes/User";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "users",
                element: <Users />
            },
            {
                path: "users/:id",
                loader: userLoader,
                element: <User />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode >
      <RouterProvider router={router} />
  </React.StrictMode>,
)
