import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Signup() {
    let nav = useNavigate()
    let [firstname, setfirstname] = useState()
    let firstnamevalue = (e) => {
        setfirstname(e.target.value)
    }

    let [lastname, setlastname] = useState()
    let lastnamevalue = (e) => {
        setlastname(e.target.value)
    }

    let [email, setemail] = useState()
    let emailvalue = (e) => {
        setemail(e.target.value)
    }

    let [password, setpassword] = useState()
    let passwordvalue = (e) => {
        setpassword(e.target.value)
    }
    let signup = () => {
        let alreadyuser = axios.get("https://instabackend-nine.vercel.app/alreadyuser")
        alreadyuser.then((res) => {
            if (res.data.status) {
                let users = res.data.signup
                let filterusers = users.filter(user => user.email == email)
                let existdata = filterusers[0]

                if (existdata) {
                    alert("already user")
                }

                else {
                    let response = axios.post("https://instabackend-nine.vercel.app/Signup", { email, password, firstname, lastname })
                    response.then((res) => {
                        if (res.data.status) {
                            swal("signup success");
                            nav("/")
                        }
                        else {
                            alert("failed to signup")
                        }
                    }).catch((err) => {
                        console.log("signup error", err)
                    })
                }
            }
        })

    }

    return (
        <>
            <div className="box-1">
                <div className="container">
                    <div className="box-1-main">
                        <h1>Signup</h1>
                        <h6>First name</h6>
                        <input type="text" placeholder="Enter first name" onChange={firstnamevalue} required />
                        <h6>last name</h6>
                        <input type="text" placeholder="Enter second name" onChange={lastnamevalue} required />
                        <h6>Email value</h6>
                        <input type="email" placeholder="Enter email" onChange={emailvalue} required />
                        <h6>Enter password</h6>
                        <input type="password" placeholder="Enter password" onChange={passwordvalue} required />
                        <button onClick={signup}>Signup</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Signup }