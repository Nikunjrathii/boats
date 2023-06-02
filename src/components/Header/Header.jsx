import { useContext, useEffect, useState } from "react";
import "./Header.scss";
import {useNavigate} from 'react-router-dom'
import {TbSearch} from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai";
import {CgShoppingCart} from "react-icons/cg"
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/context";


const Header = () => {
    
    const [scrolled,setScrolled]=useState(false)
    const [showCart,setShowCart]=useState(false)
    const [showsSearch,setShowSearch]=useState(false)
    const{cartCount}=useContext(Context);
    const navigate=useNavigate();
    const handleScroll=()=>{
        const offSet=window.scrollY
        if(offSet>80){
setScrolled(true);
        }else{
            setScrolled(false)
        }
    }
    useEffect(()=>{
window.addEventListener("scroll",handleScroll)
    },[])
    return(
    <>
     <header className={`main-header ${scrolled?'sticky-header':''}`}>
<div className="header-content">
    <ul className="left">
        <li onClick={()=>navigate("/")}>Home</li>
        <li>About</li>
        <li>Categories</li>
    </ul>
    <div className="center"  onClick={()=>navigate("/")}>BoatStore</div>
    <div className="right">
        <TbSearch onClick={()=>setShowSearch(true)}/>
        <AiOutlineHeart/>
        <span className="cart-icon" onClick={()=>setShowCart(true)}>
            <CgShoppingCart/>
          { !!cartCount && <span>
                {cartCount}
            </span>}
        </span>
    </div>
</div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showsSearch && <Search setShowSearch={setShowSearch} />}
    </>
    )
};

export default Header;
