import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import axios from 'axios'
import "../cartcss/Cart.css"
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  let [cartdata, setcartdata] = useState([])

  useEffect(() => {
    cartitem()
  }, [])


  let cartitem = async () => {
    await axios.get("http://localhost:8080/cartitem").then((r) => {
      if (r.data.status) {
        setcartdata(r.data.cartdata)
      }
      else {
        alert("failed to cart")
      }
    }).catch((err) => {
      console.log("cart err", err)
    })
  }

  let Cartproduct = ({ product }) => {


    let itmprice=product.price
    let itemid = product.id
    let [quantity, setquantity] = useState(product.quantity)
    const [price, setprice] = useState(itmprice*product.quantity);

    // let itemtotalprice=parseInt(price)+parseInt(itmprice)

    useEffect(() => {
      setprice(quantity * itmprice);
    }, [quantity, itmprice]);
    
  
    // let updatecart=async()=>{
    //   axios.post("http://localhost:8080/updatecart",{
    //     itemid,
    //     
    //   })
    // }

    
    let increment = () => {
      setquantity(++quantity)
      let totalprice=quantity*product.price
      axios.post("http://localhost:8080/updatecart", { itemid, quantity,totalprice })
      window.location.reload()
    }
  
    let decrement = () => {
      if (quantity <= 1) {
        setquantity(1)
      }
      else {
        setquantity(--quantity)
        let totalprice=quantity*itmprice
        axios.post("http://localhost:8080/updatecart", { itemid, quantity,totalprice })
        window.location.reload()
      }

    }


    let go = useNavigate()
    let productdetail = (product) => {
      go("/productdetails", {
        state: {
          image: product.image,
          title: product.title,
          des: product.des,
          price: product.price,
          rating: product.rating,
        }
      })
    }

    let removecart = (item) => {
      axios.post("http://localhost:8080/removeitem", { item })
      window.location.reload()
    }


    return (
      <>
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2" onClick={() => productdetail(product)}><img className="img-fluid" src={product.image} /></div>
            <div className="col">
              <div className="row text-muted">{product.title}</div>
              <div className="row"></div>
            </div>
            <div className="col count-btn">
              <button style={{ padding: "0px 15px" }} onClick={decrement}>-</button><a>{quantity}</a><button style={{ padding: "0px 15px" }} onClick={increment}>+</button>
            </div>
            <div className="col">₹{product.updateprice} </div>
            <div className="col close" onClick={() => removecart(product.id)}><span  >&#10005;</span></div>
          </div>
        </div>
      </>
    )
  }


  return (
    <div>
      <Nav />

      <div className="card">
        <div className="row ">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                <div className="col align-self-center text-right text-muted">{cartdata.length} ITEMS</div>
              </div>
            </div>
            {cartdata.map((item) => {
              return (
                <>
                  <Cartproduct product={item} />


                </>
              )
            })}
          </div>
          <div className="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <hr />
            <div className="row">
              <div className="col" style={{ "paddingLeft": "0" }}>{cartdata.length} ITEMS</div>
            </div>
            <div className="row" style={{ "borderTop": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0" }}>
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">&euro;</div>
            </div>
            <div className="row" style={{ "borderTop": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0" }}>
              <div className="col">DISCOUNT PRICE</div>
              <div className="col text-right">&euro;</div>
            </div>
            <button className="btn"><Link to="/checkout" style={{color:"white"}}>CHECKOUT</Link></button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Cart
