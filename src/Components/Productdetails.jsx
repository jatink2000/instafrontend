import React from 'react'
import { Nav } from './Nav'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import axios from 'axios'
import Swal from 'sweetalert2'

function Productdetails() {
    let location = useLocation()
    console.log(location.state)
    console.log(location.state)
    let rating = (type) => {
        console.log("type", type)
    }

    let addcart = (product) => {
        let alreadycart = axios.get("http://localhost:8080/cartitem")
        alreadycart.then((res) => {
            if (res.data.status) {
                let cartdata = res.data.cartdata

                let filterdata = cartdata.filter((cart) => cart.id == product.id)
                let cartalready = filterdata[0]
                if (cartalready) {
                    alert("already in cart")
                }
                else {
                    let cart = axios.post("http://localhost:8080/cart", { product }).then((r) => {
                        if (r.data.status) {
                            Swal.fire({
                                title: "Good job!",
                                text: " Successful to add cart",
                                icon: "success"
                            });
                        }
                        else {
                            alert("falied to cart")
                        }
                    }).catch((err) => {
                        console.log("cart err", err)
                    })
                }
            }
        }).catch((err) => {
            console.log("cart", err)
        })

    }

    return (
        <div>
            <Nav />
            <div className='product-details'>
                <div className='container'>
                    <div className='productdetails-in'>
                        <div className='image'>
                            <img src={location.state.image} alt='productdelatis' />
                        </div>
                        <div className='text'>
                            <h1>{location.state.title}</h1>
                            <p className='pd-price'>₹{location.state.price}</p>
                            <p className='pd-des'>{location.state.des}</p>
                            <p className='pd-rating'>{location.state.rating}

                                <i class="fa-solid fa-star" value="1" onClick={() => rating("1")}></i>
                                <i class="fa-solid fa-star" value="2" onClick={() => rating("2")}></i>
                                <i class="fa-solid fa-star" value="3" onClick={() => rating("3")}></i>
                                <i class="fa-solid fa-star" value="4" onClick={() => rating("4")}></i>

                            </p>
                            <button onClick={() => addcart(location.state)}>Add cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Productdetails
