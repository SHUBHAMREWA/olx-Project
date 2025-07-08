import Header from "./Header";
import Cookies from "universal-cookie";
import { useNavigate, Link } from "react-router-dom";
import ShowAllProduct from "./OtherComponent/ShowAllProduct";
import Categories from "./Categories";
import { useEffect, useState } from "react";

import axios from "axios";


axios.defaults.baseURL = "http://localhost:3500/"

const Home = () => {


  const [allProduct, setAllProduct] = useState([]);
  const [runEffect  ,setRunEffect] = useState("")
  const [search, setSearch] = useState("");
  let cookie = new Cookies();
  let navigate = useNavigate();

  // useEffect(() => {
  //   let getToken = cookie.get("loginToken");

  //   if (!getToken) {
  //     navigate("/login");
  //   }
  // }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "/allProducts",
    })
      .then((data) => {
        setAllProduct(data.data.products);
        console.log("data aa gaya")
      })
      .catch((error) => {
        console.log(error);
      });
  }, [runEffect]);


  // input keyword search fuction api request
  
  const handleSearch = (itemSearch) => {

    setRunEffect(itemSearch)

    if (itemSearch == "") {
      axios({
        method: "get",
        url: "http://localhost:3500/allProducts",
      })
        .then((data) => {
          setAllProduct(data.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    }
 
  
    let searchProductList = allProduct.filter((el, index) => {
      if (
        el.productDescription
          .toLowerCase()
          .includes(itemSearch.toLowerCase()) ||
        el.productName
          .toLowerCase()
          .includes(itemSearch.toLowerCase()) ||
        el.productcategory
          .toLowerCase()
          .includes(itemSearch.toLowerCase())
      ) {
        return el;
      }
    });

    setAllProduct(searchProductList); 

  };

  // search by category function  api request
const searchByCategory =(item)=>{
  setRunEffect(item)

      let filtered = allProduct.filter((el, index)=>{
            if(el.productcategory.toLowerCase().includes(item.toLowerCase())){
              return el
            }
      })

      setAllProduct(filtered)
      
}

// add product ot wishlist function  api request

const LikedProducts = async(id)=>{
     let token = cookie.get("loginToken")   ;

     
       
      try{

         let response = await axios({
                     method : "POST" ,
                      url :  "/liked-products" , 
                      data  : {
                           token : token , 
                           productId : id
                      }
         })

         console.log(response) ;
         alert("product added to wishlist") ;

      }
      catch(error){
         alert("not added to wishlist")
      }
      
   
}



  return (
    <div>
      <Header
        setSearch={setSearch}
        search={search}
        handleSearch={handleSearch}
      />
      <Categories searchByCategory={searchByCategory} />
      Welcome to Home page....
      <br />
      <br />
     
      <h2>My Product</h2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {allProduct &&
          allProduct.length > 0 &&
          allProduct.map((el, index) => {
            // console.log(el)
            return (
              <ShowAllProduct
                key={index + Math.random()}
                proDis={ el.productDescription}
                proName={el.productName}
                proPrice={el.productPrice}
                proCate={el.productcategory}
                proImg={el.productImage}
                proId = {el._id} 
                LikedProducts = {LikedProducts}  
             
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
