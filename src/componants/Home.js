import React from 'react'
// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const API = "https://dummyjson.com/products"

export default function Home() {
  let [val, setval] = useState([]);
  let [search, setsearch] = useState("");
  let [category , setcategory] = useState([]);

  useEffect(() => {

    axios.get(API)
      .then(function (response) {
        // handle success
        // console.log(response.data.products);
        setval(response.data.products)
        console.log(response.data.products)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[])
  


  return (
    <>





      <div className="row gx-0 ps-5 pt-3">
        <div className="col-12 text-center p-4 ">
          <input type="text" className='searchbox ps-3' placeholder='Search for Shop' onChange={(e) => setsearch(e.target.value)} />
          <span className='search'>Search</span>
        </div>
        {
          val.filter((value) => {
            if(search === ""){
              return value
            }
            else if(value.category.toLowerCase().includes(search.toLowerCase())){
              return value
            }
            else if(value.title.toLowerCase().includes(search.toLowerCase())){
              return value
            }
            else if(value.brand.toLowerCase().includes(search.toLowerCase())){
              return value
            }
          })
          .map((item) => {
            return (
              <>

                <div className="col-3 mb-5">
                  <Link to={`/singleproduct/${item.id}`} className="link link1">
                    <div className=' thumbnail' >
                      <img src={item.thumbnail} className="mb-3" />
                      <div className='fw-bold text-center pe-5' >{item.title}</div>
                      <div className='greenfont text-center pe-5'>From ${item.price}/- </div>
                      <div className='text-center pe-5'>{item.brand} </div>
                    </div>
                  </Link>
                </div>

              </>
            )
          })
        }

      </div>


    </>
  );
}
