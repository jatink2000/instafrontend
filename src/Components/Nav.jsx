import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import img1 from "../images/blinkitlogo.png";
import axios from "axios";


function Nav(props) {

    let [cart, setcart] = useState()
    useEffect(() => {
        totalcart()
    }, [])

    let totalcart = () => {
        let cartitem = axios.get("https://instabackend-nine.vercel.app/cartitem").then((res) => {
            let cartdata = res.data.cartdata
            setcart(cartdata.length)
        })
    }

    return (
        <>
            <header>
                <div className="row">
                    <div className="col-2">
                        <Link to="/home">
                            <img src={img1} alt="" />
                            
                        </Link>
                    </div>
                    <div className="col-2"><h6><b>Delivered in 11 minutes</b></h6><p>Jaipur Rajasthan</p></div>
                    <div className="col-5"><input type="search" name="" id="" /></div>
                    <div className="col-1 text-end"><h4><Link to="/">Logout</Link></h4></div>

                    <div className="col-2">
                        <Link to="/cart">
                            <button type="button" class="btn cart position-relative">
                                <i class="fa-solid fa-cart-shopping"></i> &nbsp;Cart
                                <span class="totalcart position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </Link>
                    </div>

                    <div>
                        <p>{props.name}</p>
                    </div>


                </div>
            </header>
        </>
    )
}

export { Nav }