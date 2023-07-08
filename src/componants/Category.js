import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Category() {

    const params = useParams();

    let [val1, setval1] = useState([]);

    useEffect(() => {
  
      axios.get(`https://dummyjson.com/products/category/${params.id}`)
        .then(function (response) {
          // handle success
          console.log(response.data.products);
          setval1(response.data.products)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },[params.id])
  return (
    <>
        <div className="row gx-0 ps-5 pt-5">
        <div>

            {/* {params.id} */}
            {/* {val.title} */}
        </div>
          {
          val1.map((item) => {
            return(
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
  )
}
