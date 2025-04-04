import axios from "axios";
import React, { useEffect, useState } from "react";

import "../Admin.css"
import { Adminnav } from "./Adminnav";


function Users() {


    let [user, setuser] = useState([])

    useEffect(() => {
        hp()
    }, [])

    let hp = () => {
        axios.get("https://instabackend-nine.vercel.app/alreadyuser").then((res) => {
            if (res.data.status) {
                setuser(res.data.signup)
            }
        })
    }
    return (
        <>
            <Adminnav />
            <br /><br />
            <div className="container mt-3">
                <h2 className="user-headingtable">User account</h2>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
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

export { Users }