import Home from "./Componet/Home";
import Login from "./Componet/Login";
import Signup from "./Componet/Signup";
import AddProduct from "./Componet/AddProduct";
import LikedProducts from "./Componet/LikeProducts/LikedProducts"; 
import ProductDetails from "./Componet/ProductDetails/ProductDetails";

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
  }
  ,
  {
    path : "/add-product" , 
    element : <AddProduct/>
  }
  ,
  {
    path : "/liked-product" , 
    element : <LikedProducts/>
  }
  ,
  {
    path : "/product/:id" , 
    element : <ProductDetails/>
  }
];

export default routes;
