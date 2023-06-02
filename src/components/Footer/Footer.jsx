import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
<div className="col">
    <div className="title">About</div>
    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam porro doloremque culpa rem vero asperiores eaque, similique officia, consectetur alias fuga et error quis dolores, repudiandae debitis. Placeat exercitationem, officiis saepe illum a laudantium?</div>
</div>
<div className="col"><div className="title">Contact</div>
<div className="c-item"><FaLocationArrow/>
<div className="text">Rathi auto parts bus stand akodia mandi shujalpur,465223</div>
</div>
<div className="c-item"><FaMobileAlt/>
<div className="text">0999999999</div>
</div>
<div className="c-item"><FaEnvelope/>
<div className="text">BoatStore@gmail.com</div>
</div>
</div>
<div className="col"><div className="title">Categories</div>
<span className="text">Headphones</span>
<span className="text">Smart Watches</span>
<span className="text">BlueTooth Speakers</span>
<span className="text">Wireless Earbuds</span>
<span className="text">Home Theater</span>
<span className="text">Projectors</span>

</div>
<div className="col"><div className="title">Pages</div>
<span className="text">Home</span>
<span className="text">About</span>
<span className="text">Privacy Policy</span>
<span className="text">Returs</span>
<span className="text">Terms & Conditions</span>
<span className="text">Contact Us</span>
</div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">BOATSTORE 2023 CREATED BY NIKUNJ RATHI .PREMIUM E-COMMERCE SOLUTIONS</div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>;
};

export default Footer;
