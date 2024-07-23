import React from "react";
import { createBrowserRouter,Navigate } from "react-router-dom";
import './App.css';
import WriteBlog from "./components/WriteBlog/WriteBlog";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";

const App = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        
    },
    {
        path: "/blog/:id",
        element: <Blog/>
    },
    {
        path:"/blog/write",
        element:<WriteBlog/>
    },
    {
        path:"*",
        element:<Navigate to="/" replace />
    },
]);

export default App;