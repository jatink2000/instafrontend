import React, { useEffect, useState } from "react";
import Dudhbread from "../images/dudhbread.png";
import fruits from "../images/fruit.png";
import colddrink from "../images/colddrink.png";
import chocolate from "../images/choclate7.png";
import meggie from "../images/meggie.png";
import chips from "../images/chips.png";
import slice9 from "../images/Slice-9_3.png";
import slice10 from "../images/Slice-10.png";
import slice12 from "../images/Slice-12.png";
import slice17 from "../images/Slice-17.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Productlink() {

    let [apidata, setapidata] = useState([])

    let go = useNavigate()

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


    let filterdata = (type) => {
        let datafilter = apidata.filter(apidata => apidata.category == type)
        go("/productcat", {
            state: datafilter
        })
    }

    return (
        <>
            <div className="container">
                <div className="Productlink">

                    <div className="Productlink-box" onClick={() => filterdata("Diary product")}>
                        <img src={Dudhbread}></img>
                    </div>
                    <div className="Productlink-box" onClick={() => filterdata("Fruits")}>
                        <img src={fruits}></img>
                    </div>
                    <div className="Productlink-box" onClick={() => filterdata("Soft drinks")}>
                        <img src={colddrink}></img>
                    </div>
                    <div className="Productlink-box" onClick={() => filterdata("Sweets")}>
                        <img src={chocolate}></img>
                    </div>
                    <div className="Productlink-box" onClick={() => filterdata("Breakfast food")}>
                        <img src={meggie}></img>
                    </div>
                    <div className="Productlink-box" onClick={() => filterdata("Snacks")}>
                        <img src={chips}></img>
                    </div>

                    <div className="Productlink-box" onClick={() => filterdata("Tea")}>
                        <img src={slice9}></img>
                    </div>
                    <div className="Productlink-box" onClick={() => filterdata("Atta")}>
                        <img src={slice10}></img>
                    </div>

                    <div className="Productlink-box" onClick={() => filterdata("Sauces")}>
                        <img src={slice12}></img>
                    </div>

                    <div className="Productlink-box" onClick={() => filterdata("Cleaning Essentials")}>
                        <img src={slice17}></img>
                    </div>

                </div>
            </div>
        </>
    )
}

export { Productlink }