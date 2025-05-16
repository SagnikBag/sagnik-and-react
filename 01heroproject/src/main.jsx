import React from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store  from './store/store.js'
import { RouterProvider } from 'react-router-dom'
import { AuthLayout,Login } from './component/index.js'

import AddPost from '../src/component/pages/AddPost'
import Signup from '../src/component/pages/Signup'
import EditPost from '../src/component/pages/EditPost'
// import AllPosts from './component/pages/AllPosts'
import Post from '../src/component/pages/Post'

const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDom.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
   <Provider store={store}>
   <RouterProvider router = {router}/>
   </Provider>
  </React.StrictMode> 
)
