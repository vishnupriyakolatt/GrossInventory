import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Video from '../asset/production_id_4121740 (2160p).mp4';
import { FaCartPlus } from "react-icons/fa";

function Product() {
  const [products, setProducts] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/inventory/getallproducts');
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
<>
  <div className='h-screen mt-30 relative flex flex-col items-center'>
    <video
      autoPlay
      loop
      muted
      className='w-full h-3/4 object-cover'
    >
      <source src={Video} type='video/mp4' />
      Your browser does not support the video tag.
    </video>

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold whitespace-nowrap">
      WELCOME TO G-CART
    </div>
  </div>

  <div className="flex flex-wrap justify-center gap-4">
    {products.map((product) => (
      <div key={product.id} className="relative mt-[-120px] ml-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <img className="object-cover" src={product.image} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.offer}% OFF</span>

        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
          <h6 className="text-xl tracking-tight  text-slate-900">{product.category}</h6>
          <div className="mt-2 mb-5 flex items-center bg-linear-gradient(to top, #dfe9f3 0%, white 100%) justify-between">
            <p>
              <span className="text-2xl font-bold text-slate-900">{product.rate}/kg</span>
            </p>
            <div className="flex items-center">
             
                <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
         
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">stock: {product.stock}</span>
            </div>
          </div>
          <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    ))}
  </div>
</>

  
  );
}

export default Product;
