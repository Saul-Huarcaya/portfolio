import "./HeaderEcommerce.css";
import { AiOutlineShoppingCart} from "react-icons/ai";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useContext, useState } from "react";
import { ContextEcommerce } from "../../../Context/ContextEcommerce";

function HeaderEcommerce(){

    const [visibleCart,setVisibleCard] = useState(false);
    const {data} = useContext(ContextEcommerce)

    return <div className="header-ecommerce">
        <div className="container-hec">
            <h2>Store</h2>
            <button 
                className={`btn-carrito ${(data.carrito.length > 0)&&"yeno"}`} 
                onClick={()=> 
                setVisibleCard(!visibleCart)}
            >
                <AiOutlineShoppingCart/> 
                
            </button>
            
            {
                (visibleCart)?<ShoppingCart/>:null
            }
        </div>
    </div>
}

export default HeaderEcommerce;