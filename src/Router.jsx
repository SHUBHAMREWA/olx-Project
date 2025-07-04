import Home from "./Componet/Home";
import Login from "./Componet/Login";
import Signup from "./Componet/Signup";
import AddProduct from "./Componet/AddProduct";

// all routes are Here and we make a different path for different COMPONENT 

const routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path : "/add-product" , 
    element : <AddProduct/>
  }
];

export default routes;
