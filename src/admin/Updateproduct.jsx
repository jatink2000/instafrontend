import React from "react";
import { useLocation } from "react-router-dom";

function Updateproduct(){

   let loc= useLocation()


    return(
        <>
         <div className="box-1">
                <div className="container">
                <div className="box-1-main">
                        <h1>update products</h1>
                        <label>product title:</label>
                        <input type="text" placeholder="enter product title" value={loc.state.title} /><br /><br />
                        <label>product des:</label>
                        <input type="text" placeholder="enter product des" value={loc.state.des} /><br /><br />
                        <label>product price:</label>
                        <input type="text" placeholder="enter product price" value={loc.state.price}/><br /><br />
                        <label>product imageurl:</label>
                        <input type="text" placeholder="enter product image url" value={loc.state.image}/><br /><br/>
                        <label>product rating:</label>
                        <input type="text" placeholder="enter product rating" value={loc.state.rating}/><br /><br />
                        <button className="clickbtn">update product</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export{Updateproduct}