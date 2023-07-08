import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';



export default function Header() {

    let [val, setval] = useState([]);

    useEffect(() => {

        axios.get("https://dummyjson.com/products/categories")
            .then(function (response) {
                // handle success
                // console.log(response);
                setval(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handle() {
        setShow(false);
    }
    // function handleclick(e){
    //     alert(e);
    // }




    return (
        <>




            <header className='border-bottom'>
                <div className="container">
                    <div className="row py-4 ">
                        <div className="col-2">
                            <img src="https://shopo.quomodothemes.website/assets/images/logo-2.svg" alt="" />
                        </div>
                        <div className="col-7 text-center menu mt-2">
                            <Link to="/" className='link txthover'>Home</Link>
                            <Link to="about" className='link txthover'>About</Link>
                            <Link to="Contact" className='link txthover'>Contact</Link>
                        </div>
                        {/* <div className="col-5 text-center">
                            <input type="text" className='searchbox ps-3' placeholder='Search for Shop' />
                            <span className='search'>Search</span>
                        </div> */}
                        <div className="col-3 text-end btn">
                            <Button onClick={handleShow}>
                                category
                            </Button>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <h1>Categories</h1>
                                </Offcanvas.Header>
                                <Offcanvas.Body>



                                    {/* {val.data.category[0]} */} 
                                    {
                                        val.map((item) => {
                                            return (
                                                <>

                                                    <Link to={`/category/${item}`} className="link txthover" ><div onClick={handle}>{item}</div></Link>
                                                    {/* <button onClick={(e) => handleclick(e.target.value)} value={item}>{item}</button> */}
                                                </>
                                            )
                                        })
                                    }
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
