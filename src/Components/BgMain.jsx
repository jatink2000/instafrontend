import React from "react";
import bggreen from "../images/greenbgpick.webp";
import pharmacy from "../images/pharmacy-WEB.avif";
import petcare from "../images/Pet-Care_WEB.avif";
import babycare from "../images/babycare-WEB.avif";

function BgMain() {

    return (
        <>
            <div className="Bgmainbox">
                <div className="container">
                    <div className="Bgmainbox1">
                        <img src={bggreen} />
                    </div>

                    <div className="Bgmainbox-in">
                        <div className="Bgmainbox2">
                            <img src={pharmacy} />
                        </div>
                        <div className="Bgmainbox2">
                            <img src={petcare} />
                        </div>
                        <div className="Bgmainbox2">
                            <img src={babycare} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export { BgMain }