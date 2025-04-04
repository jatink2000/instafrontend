import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Adminnav } from './Adminnav'

function Allproducts() {
    let [product, setproduct] = useState([])

    useEffect(() => {
        apidata()
    }, [])

    let apidata = () => {
        axios.get("http://localhost:8080/products").then((res) => {
            setproduct(res.data.product)
        }).catch((err) => {
            console.log("product", err)
        })
    }


    // updateitem --------------
    let go = useNavigate()

    let updateitem = (item) => {
        go("/updateproduct", { state: item })
    }



    // removeproduct

   let removeproduct=(itemid)=>{
    axios.post("http://localhost:8080/removeproduct",{itemid}).then((res)=>{
        if(res.data.status){
            alert(res.data.msg)
            window.location.reload()
        }
        else{
            alert(res.data.msg)
        }
    }).catch((err)=>{
        console.log(err)
    })
   }

    return (
        <>
            <Adminnav />
            <br />
            <div className="container mt-3">
                <h2 className="user-headingtable">Product detail</h2>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Sr. No. </th>
                            <th>Product Name</th>
                            <th>Product image</th>
                            <th>Product price</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {product.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td><img src={item.image} width={"30px"} /></td>
                                        <td>{item.price}</td>
                                        <td><i class="fas fa-edit" onClick={() => updateitem(item)}></i> &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-trash"  onClick={()=>removeproduct(item.id)}></i></td>
                                    </tr>

                                </>
                            )
                        })}


                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Allproducts
