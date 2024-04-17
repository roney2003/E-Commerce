import React, { useEffect,useContext} from "react";

import ProductContext from "../context/ProductContext";




function Home() {
        
  const {products,setProducts,addToCart} = useContext(ProductContext);
  
 

     useEffect(() => {
        getProducts();
     } , [])

     const getProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
       // console.log(data.products);

       setProducts(data.products);
       console.log(products);
     }


  return (
<>
    <div className=" h-45 bg-gray-100 flex border-b-2">
     <img src="https://tse4.mm.bing.net/th?id=OIP.9y0jXj0zanNEbHyK1CQrJwHaEK&pid=Api&P=0&h=180" alt="nature" className="  object-cover" />
     
     <img src="https://tse3.mm.bing.net/th?id=OIP.Odo4ahKoJGfxpfacNgTshQHaEK&pid=Api&P=0&h=180" alt="" className="object-cover"/>

      <img src="https://tse2.mm.bing.net/th?id=OIP.SEY83qkgAKtDY5mi_pCrTwHaEK&pid=Api&P=0&h=180" alt="" className="object-cover"/>

      <img src="https://tse2.mm.bing.net/th?id=OIP.JxApoaw6TCntAQdMBN3bGQAAAA&pid=Api&P=0&h=180" alt="" className="object-cover"/>

      <img src="https://tse3.mm.bing.net/th?id=OIP.WchWCC0q6Gt-W_VUKr9nNAHaHa&pid=Api&P=0&h=180" alt="" />

    </div>



    <div className=" w-[80vw] mx-auto grid grid-cols-3 gap-10  justify-evenly items-center">
     
             {products.map((product) => {
                   return (
                     <div key={product.id} className="w-60 bg-gray-200 object-cover rounded-md overflow-hidden ml-3">
                   <img className="w-full h-20[vh] object-cover rounded-md rounded-b-none"
                     src={product.thumbnail}
                     alt=""
                   />
                   <div className="p-2">
                   <h2 className="text-uppercase font-semibold">{product.title}</h2>
                   <p className="text-xs">
                    {product.description}
                   </p>
                   <div className="flex justify-between">
                   <span>${product.price}</span>
                   <button onClick={()=>addToCart(product)} className="px-3 py-2 bg-blue-400 rounded-md hover:bg-slate-100 hover:text-green-400">
                      Add to Cart
                   </button>
                   </div>
                   </div>
                 </div>)
               
             })}

        
    </div>
</>
  );
}

export default Home;
