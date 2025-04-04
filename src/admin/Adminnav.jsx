import React from "react";
import logo from "../images/blinkitlogo.png";
import { Link } from "react-router-dom";

function Adminnav() {
    return (
        <>
            <div className="Adminnav">
                <div className="container">
                    <div className="adminnav-in">

                        <div className="row">
                            <div className="col-3">
                                <div className="admin-logo">
                                    <Link to="/addproduct"><img src={logo} alt="" /></Link>
                                    
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="Adminaccount-links">
                                    <ul>
                                        <li><a href="/addproduct">AddProduct</a></li>
                                        <li><a href="/admin/users">Users</a></li>
                                        <li><a href="/allproducts">allproducts</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-2 text-center">
                                <div className="admin-btn">
                                    <button><a href="">click here</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Adminnav }