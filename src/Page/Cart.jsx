import React,{useContext} from "react";
import ProductContext from "../context/ProductContext";

function Cart() {

    const {cart,removeFromCart} = useContext(ProductContext);
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>
                {Cart.length > 0 ? `Your Cart` : `Cart has ${cart.length} items`}
            </h1>
            <div className='grid grid-cols-3 gap-3 justify-evenly items-center'>
                {cart.map((product) => {
                    return (
                        <div key={product.id} className='w-60 bg-gray-200 object-cover rounded-md overflow-hidden ml-3'>
                            <img className='w-full h-20[vh] object-cover rounded-md rounded-b-none' src={product.thumbnail} alt="" />
                            <div className='p-2'>
                                <h2 className='text-uppercase font-semibold'>{product.title}</h2>
                                <p className='text-xs'>{product.description}</p>
                                <div className='flex justify-between'>
                                    <span>${product.price}</span>
                                    <button onClick={()=>removeFromCart(product)} className='px-3 py-2 bg-blue-400 rounded-md hover:bg-slate-100 hover:text-green-400'>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
    }   

export default Cart;