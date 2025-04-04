import axios from "axios";
import React, { useState } from "react";
import { Adminnav } from "./Adminnav";

function Addproduct() {

    let [title, settitle] = useState()
    let titlevalue = (e) => {
        settitle(e.target.value)
    }

    let [price, setprice] = useState()
    let pricevalue = (e) => {
        setprice(e.target.value)
    }

    let [image, setimage] = useState()
    let imagevalue = (e) => {
        setimage(e.target.value)
    }

    let [des, setdes] = useState()
    let desvalue = (e) => {
        setdes(e.target.value)
    }

    let [rating, setrating] = useState()
    let ratingvalue = (e) => {
        setrating(e.target.value)
    }

    let [category, setcategory] = useState("Diary product")
    let categoryvalue = (e) => {
        setcategory(e.target.value)
    }

    let [productid, setproductid] = useState()
    let Idvalue = (e) => {
        setproductid(e.target.value)
    }

    let productbtn = () => {
        let response = axios.post("https://instabackend-nine.vercel.app/addproduct", { title, price, image, rating, des, category , productid})
        response.then((res) => {
            if (res.data.status) {
                alert("add product success")
                // nav("/")
            }
            else {
                alert("failed to add product")
            }
        }).catch((err) => {
            console.log("addproduct error", err)
        })
    }

    return (
        <>

        <Adminnav/>
           <div className="box-1">
                <div className="container">
                <div className="box-1-main">
                        <h1>add products</h1>
                        <label>product title:</label>
                        <input type="text" placeholder="enter product title" onChange={titlevalue} /><br /><br />
                        <label>product des:</label>
                        <input type="text" placeholder="enter product des" onChange={desvalue} /><br /><br />
                        <label>product price:</label>
                        <input type="text" placeholder="enter product price" onChange={pricevalue} /><br /><br />
                        <label>product imageurl:</label>
                        <input type="text" placeholder="enter product image url" onChange={imagevalue} /><br /><br/>
                        <label>product rating:</label>
                        <input type="text" placeholder="enter product rating" onChange={ratingvalue} /><br /><br />
                        <label>Id:</label>
                        <input type="text" placeholder="enter Id" onChange={Idvalue} /><br /><br />
                        <h1>{category}</h1>
                        <select onChange={categoryvalue}>
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

                        <button  onClick={productbtn} className="clickbtn">add to product</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export { Addproduct }