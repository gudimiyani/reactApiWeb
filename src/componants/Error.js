import React from 'react'
import { Link } from "react-router-dom";

export default function Error() {
  return (
   <>
   
        <div className="row pt-5 mt-5 g-0">
            <div className="col-12 text-center h1">
                404
            </div>
            <div className="col-12 text-center fs-2">
                UH OH! You're lost.
            </div>
            <div className="col-12 text-center pt-3 ">
                The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.
            </div>
            <div className="col-12 text-center mt-5">
                <Link to="/" className=' home search'>Home</Link>
            </div>
        </div>

   </>
  )
}
