import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

function Productcat() {
    let location = useLocation()
    let [data, setdata] = useState(location.state)
    let go = useNavigate()


    console.log("data", data)
    // product-details
    let productdetail = (product) => {
        go("/productdetails", {
            state: {
                image: product.image,
                title: product.title,
                des: product.des,
                price: product.price,
                rating: product.rating,
                quantity:product.quantity,
                category:product.category
            }
        })
    }
    return (
        <>
            <Nav />


            {data.map((item) => {
                return (
                    <>
                        <div className='product-details'>
                            <div className='container'>
                                <div className='productdetails-in'>
                                    <div onClick={() => productdetail(item)}>
                                        <img src={item.image} />
                                    </div>
                                    <div className='text'>
                                        <h1>{item.title}</h1>
                                        <h6>₹{item.price}</h6>
                                        <p>{item.des}</p>
                                        <h6>{item.rating}</h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            <Footer />
        </>
    )
}
export { Productcat }