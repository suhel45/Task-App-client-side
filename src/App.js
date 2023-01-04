import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Main from './layout/Main';
import Login from './component/Login'
import Register from './component/Register';
import PrivateRoute from './component/PrivateRoute';
import AddTask from './component/AddTask';
import MyTask from './component/MyTask';
import CompletedTask from './component/CompletedTask';
import Update from './component/Update';
import { Toaster } from 'react-hot-toast';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/add-task',
          element:<PrivateRoute><AddTask></AddTask></PrivateRoute> 
        },
        {
          path:'/my-task',
          element:<MyTask></MyTask>
        },
        {
          path:'/completed-task',
          element:<CompletedTask></CompletedTask>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params})=>fetch(`https://task-app-server-side.vercel.app/my-task/${params.id}`)
        },
        {
          path:'/register',
          element:<Register></Register>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster ></Toaster>
    </div>
  );
}

export default App;
