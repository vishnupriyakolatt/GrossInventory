import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addproduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [productcode, setproductcode] = useState("");
  const [rate, setRate] = useState("");
  const [category, setcategory] = useState("");
  const [stock, setstock] = useState("");
  const [image, setImage] = useState("");
  const[offer,setoffer]=useState("")

  const addproduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productcode", productcode);
    formData.append("name", name);
    formData.append("rate", rate);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("file", image);
    formData.append("offer",offer);
    console.log(formData.get('file'))
    try {
      const response = await axios.post(
        "http://localhost:9000/api/inventory/addproducts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.data.msg) {
        navigate('/');
        toast.success('product added successfully!', {
          position: toast.POSITION.TOP_CENTER,
         
        });
     
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        toast.error("Internal Server Error. Please try again later.", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.error("Error:", error);
        toast.error(
          error?.response?.data?.msg ||
            error?.message ||
            "Something went wrong! Please try again.",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      }
  };
}

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file)
  };

  

  return (
    <>
      <div className="flex">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden w-full">
          <div className="w-full p-10 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl text-center text-gray-900 font-bold mb-2">
              ADD Transaction
            </h1>
            <div className="relative">
              <label
                title="Click to upload"
                htmlFor="button2"
                className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <div className="w-max relative">
                  <img
                    className="w-12"
                    src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                    alt="file upload icon"
                    width="512"
                    height="512"
                  />
                </div>
                <div className="relative">
                  <span className="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                    Upload a file
                  </span>
                  <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                    Max 2 MB
                  </span>
                </div>
              </label>
              <input
                hidden=""
                type="file"
                name="file"
                id="button2"
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Product code
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="productcode"
                id="productcode"
                value={productcode}
                onChange={(e) => setproductcode(e.target.value)} // Corrected onChange
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
               Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Corrected onChange
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
               Rate
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="rate"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)} // Corrected onChange
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='category'
                className='block text-sm font-semibold text-gray-800'
              >
                Category
              </label>
              <select
                className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                name='category'
                id='category'
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value=''>Select Category</option>
                <option value='Classics'>Diary</option>
                <option value='Detective and Mystery'>
                  Detective and Mystery
                </option>
                <option value='Fantasy and Romance'>Fantasy and Romance</option>
                <option value='Historical and Literary Fiction'>
                  Historical and Literary Fiction
                </option>
              </select>
            </div>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
             Stock
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="stock"
                id="stock"
                value={stock}
                onChange={(e) => setstock(e.target.value)} 
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
      Offer
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="offer"
                id="offer"
                value={offer}
                onChange={(e) => setoffer(e.target.value)} 
              />
            </div>
            
            <button
              onClick={addproduct}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Category
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Addproduct;
