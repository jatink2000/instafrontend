import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {

    useEffect(() => {
        productdata()
    }, [])

    let [apidata, setapidata] = useState([])
    let [filterapi, setfilterapi] = useState([])

    let go = useNavigate()

    let productdata = async () => {
        await axios.get("http://localhost:8080/products").then((r) => {
            if (r.data.status) {
                setapidata(r.data.product)
                setfilterapi(r.data.product)
            } else {
                alert("failed to fetch product")
            }

        }).catch((err) => {
            console.log("product error", err)
        })
    }


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
                category:product.category,
                id:product.id

            }
        })
    }



    let categoryupdate = (item) => {
        if (item == "all") {
            setfilterapi(apidata);
        } else {
            const filtered = apidata.filter((product) => product.category == item);
            setfilterapi(filtered);
        }
    }

    return (
        <>
            <div className="Product-main">
                <div className="container">
                    <div className="producthead">
                        <div className="left">
                            <h1>Dairy, Bread & Eggs</h1>
                        </div>
                        <div className="right style=width:200px;">

                            <select onChange={(e) => categoryupdate(e.target.value)}>
                                <option value="all">All</option>
                                <option value="Diary product">Diary product</option>
                                <option value="Soft drinks">Soft drinks</option>
                                <option value="Sweets">Sweets</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Breakfast food">Breakfast food</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Atta">Atta</option>
                                <option value="Sauces">Sauces</option>
                                <option value="Tea">Tea</option>
                                <option value="Cleaning Essentials">Cleaning Essentials</option>
                            </select>
                        </div>
                    </div>


                    <div className="product-main-in">
                        {filterapi.map((item) => {
                            return (
                                <>
                                    <div className="product-box-1" onClick={() => productdetail(item)}>
                                        <img src={item.image} />
                                        <h4>{item.title}</h4><br />
                                        <div className="rate-price">
                                            <p>₹{item.price}</p>

                                            <p>{item.rating}&nbsp;<i class="fa-solid fa-heart"></i></p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export { Products }


