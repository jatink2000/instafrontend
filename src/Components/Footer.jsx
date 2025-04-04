import React, { useEffect, useState } from "react";
import googlepay from "../images/googlepay.webp";
import appstore from "../images/appstore.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Footer() {

    let [apidata, setapidata] = useState([])

    useEffect(() => {
        productdata()
    }, [])

    let productdata = async () => {
        await axios.get("https://instabackend-nine.vercel.app/products").then((r) => {
            if (r.data.status) {
                setapidata(r.data.product)
            } else {
                alert("failed to fetch product")
            }

        }).catch((err) => {
            console.log("product error", err)
        })
    }

    let go = useNavigate()
    let productdetail = (cat) => {
        let filterdata = apidata.filter(item => item.category == cat)
        go("/productcat", {
            state: filterdata
        })
        window.location.reload()
    }

    return (
        <>
            <div className="list-main">

                <div className="list-box-1">
                    <h3>Usefule links</h3>
                    <ul>
                        <li> About</li>
                        <li>Careers</li>
                        <li>Blog</li>

                    </ul>
                </div>

                <div className="list-box-2">
                    <ul>
                        <li>Privacy</li>
                        <li>term</li>
                        <li>Contact </li>
                    </ul>
                </div>


                <div className="list-box-3">
                    <ul>
                        <li>Partner</li>
                        <li>Deliver</li>
                        <li>Resources</li>
                    </ul>
                </div>

                <div className="list-box-4">
                    <h3>Catogries &nbsp;&nbsp;&nbsp;&nbsp; <span> see all</span> </h3>
                    <ul>
                        <li onClick={() => productdetail("Soft drinks")}>Cold Drinks & Juices</li>
                        <li onClick={() => productdetail("Fruits")}> Vegetables & Fruits</li>
                        <li onClick={() => productdetail("Snacks")}>Bakery & Biscuits</li>
                    </ul>
                </div>

                <div className="list-box-5">
                    <ul>
                        <li onClick={() => productdetail("Diary product")}>Dairy & Breakfast</li>
                        <li onClick={() => productdetail("Sweets")}>Sweet Tooth </li>
                        <li onClick={() => productdetail("Sauces")}>Sauces & Spread </li>
                    </ul>
                </div>

                <div className="list-box-6">
                    <ul>
                        <li onClick={() => productdetail("Atta")}> Atta, Rice & Dal</li>
                        <li onClick={() => productdetail("Tea")}> Tea, Coffee & Health Drinks</li>
                        <li onClick={() => productdetail("Fruits")}> Dry fruits Masala and Oil</li>
                    </ul>
                </div>
            </div>

            {/* {/ Footer-blinkit-second-box /} */}

            <div className="F-links">
                <div className="container">
                    <div className="row " >
                        <div className="col-lg-4 F-link-first  text-sm-center">
                            <p>© Blink Commerce Private Limited, 2016-2024</p>
                        </div>
                        <div className="col-lg-4 F-link-second" >
                            <h4>Download app</h4>
                            <img src={appstore} alt="" />
                            <img src={googlepay} alt="" />
                        </div>
                        <div className="col-lg-4 F-link-third text-sm-left">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* {/ last-paragraph-blinkit-footer /} */}

            <div className="bl-Last-para">
                <div className="container">
                    <p>“Blinkit” is owned &amp; managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
                </div>
            </div>

        </>
    )
}

export { Footer }