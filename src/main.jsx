import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      
      {
        path:'/home',
        element: <Home></Home>
      },
      {
        index: true, //for set as default route 
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobs.json')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
