import React from 'react'
import Video from '../asset/production_id_4121740 (2160p).mp4'
import { FaCartPlus } from "react-icons/fa6";
function Product() {
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


       <div class="relative mt-[-190px] flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div
    class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
      alt="ui/ux review check" />
    <div
      class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
    </div>
    <button
      class="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
          </path>
        </svg>
      </span>
    </button>
  </div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-3">
      <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
        Wooden House, Florida
      </h5>
      <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
  <span className='black' style={{ fontWeight: 'extra-bold', color: 'black', fontSize: '1.4em' }}>₹ 500/kg</span>
</p>

    </div>


  </div>

  <div class="p-3 flex ml-5 mr-5 items-center justify-center bg-gray-900 rounded-md text-white">
  <FaCartPlus class="text-2xl mr-2" />
  <span class="text-lg font-bold">ADD TO CART</span>
</div>


 

</div>
      </>
    );
  }
  
export default Product