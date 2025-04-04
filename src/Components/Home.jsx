import React from "react";
import logo from "../images/9ff1ddfa-ea87-47c4-b61b-17e98d873253.webp"
import { Link, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import { Products } from "./Products";
import { BgMain } from "./BgMain";
import { Productlink } from "./Productlink";
import { Footer } from "./Footer";

function Home() {

    let loc = useLocation()
    return (
        <>
            <Nav name={loc.state.firstname} />
            <BgMain />
            <Productlink />
            <Products />
            <Footer />
        </>
    )
}
export { Home }