import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "./Signup";
import axios from "axios";
import Swal from 'sweetalert2'


function Login() {
    let go = useNavigate()
    let [email, setemail] = useState()
    let emailvalue = (e) => {
        setemail(e.target.value)
    }

    let [password, setpassword] = useState()
    let passwordvalue = (e) => {
        setpassword(e.target.value)
    }

    let login = () => {
        let response = axios.post("http://localhost:8080/", { email, password })
        response.then((res) => {
            if (res.data.status) {
                Swal.fire({
                    title: "Good job!",
                    text: "you are login successful",
                    icon: "success"
                });
                go("/Home",{state:res.data.userdetails})
            }
            else {
                alert("failed login")
            }
        }).catch((err) => {
            console.log("login err", err)
        })
    }
    return (
        <>
            <div className="box-1">
                <div className="container">
                    <div className="box-1-main">
                        <h1>Login</h1>
                        <input type="email" placeholder="Enter email" onChange={emailvalue} required /><br /><br />
                        <input type="password" placeholder="Enter password" onChange={passwordvalue} required /><br /><br />
                        <button onClick={login}>Login</button>
                        <p>don't have any account?<Link to="/Signup">Signup</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Login }