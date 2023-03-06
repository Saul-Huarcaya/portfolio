import { useContext } from "react";
import { ContextEcommerce } from "../../../Context/ContextEcommerce";
import types from "../../../actions/actionsEcommerce";
import "./MainEcommerce.css";

function MainEcommerce(){
    const {data,dispatch} = useContext(ContextEcommerce);
    /* const agregarCarrito = (id) =>{
        
    } */

    return(<div className="main-ecommerce container">
            {
                data.productos.map((producto) => 
                <div key={producto.id} className="container-ecommerce-producto">
                    <div className="ecomerce-producto">
                        <div className="container-ecommerce-img">
                            <img src={`img/${producto.img}`}  alt={producto.nombre} />
                        </div>
                        <div className="container-ecommerce-content">
                            <p className="ecommerce-producto-nombre">{producto.nombre}</p>
                            <p>Precio: S/.{producto.precio}</p>
                            <button 
                                className="btn-producto" 
                                onClick={
                                    ()=> dispatch({type:types.ADD_PRODUCTO,payload:producto.id
                                })}
                            >Añadir al Carrito</button>  
                        </div>
                    </div>
                </div>)
            }
    </div>)
}
export default MainEcommerce;