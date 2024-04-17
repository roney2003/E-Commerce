import React,{useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import ProductContext from '../context/ProductContext';

function Navbar() {

    const [searchValue,setSearchValue] = useState([]);
    const {setProducts,cart} = useContext(ProductContext);

    const searchProducts = async() => {
         const response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
            const data = await response.json();
            setProducts(data.products);
    }

    return (
        <nav className='flex justify-evenly items-center shadow-md py-4 mb-7 '>
           <img className='w-20 h-25 object-cover' src="https://tse1.mm.bing.net/th?id=OIP.Aie-0i180j40AZ4nxYVG5AHaFj&pid=Api&P=0&h=180" alt="amazon" />
            <div>
                <input type="search" name="Search here" id='bhai'  placeholder='search here' onChange={(e)=>setSearchValue(e.target.value)}  className='outline-none border-2 px-3 py-1 rounded-md w-[45vw] hover:border-purple-600'/>
                <button onClick={searchProducts} className='px-2 py-1 bg-green-400 rounded-md ml-1'>Search</button>
            </div>
            <ul className='flex gap-2 font bold text-xl'>
                <Link className='hover:text-red-600' to='/'>Home</Link>
                <Link className='hover:text-red-600' to='/cart'>
                Cart {cart.length > 0 && <span className='bg-red-600 text-white px-2 rounded-md'>{cart.length}</span>}    
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;