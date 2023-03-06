import { useContext } from "react";
import types from "../../../actions/actionsEcommerce";
import { ContextEcommerce } from "../../../Context/ContextEcommerce";
import "./ShoppingCart.css";


const ClearCart = () =>{
    const {dispatch} = useContext(ContextEcommerce);
    
    return <>
        <button className="clear-cart" onClick={()=> dispatch({type:types.REMOVE_TOTAL_PRODUCTOS})}>Limpiar Carrito</button>
    </>
}
const PriceCart = ({data}) =>{
    let total = 0;

    data.carrito.forEach(el => {
        total = total + (el.precio * el.cantidad);
    });
    return <div className="total">
        <div>
            Total : $./{total}
        </div>
        <ClearCart/>
    </div>
}

function ShoppingCart(){
    const {data,dispatch} = useContext(ContextEcommerce);
    return <div className="shopping-cart">
        <div className="list-item-cart">
            {
                (data.carrito.length > 0) && data.carrito.map((item)=>
                <div key={item.id} className="item-cart">
                    <div className="container-item-img">
                        <img src={`img/${item.img}`} alt={item.nombre} />
                    </div>
                    <div className="text-item">
                        <p>{item.nombre}</p>
                        <p>Precio: $./{item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <div>
                            <button 
                            className="delete-item-cart" 
                            onClick={()=>dispatch({type:types.REMOVE_PRODUCTO,payload:item.id})}>Eliminar</button>
                            
                            <button 
                            className="delete-producto-cart" 
                            onClick={()=>dispatch({type:types.DECREASE_ONE_PRODUCTO,payload:item.id})}>-1</button>
                        </div>
                    </div>
                </div>) 
                
            }
        </div>
        <div>{(data.carrito.length <= 0)&& <p>Sin Productos</p>}</div>
        <>{data.carrito.length > 0 && <PriceCart data={data}/>}</>
        

        
    </div>
}
export default ShoppingCart;