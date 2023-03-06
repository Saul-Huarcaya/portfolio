import types from "../actions/actionsEcommerce.jsx";

const reducerEcommerce = (state,action) =>{
    switch(action.type){
        case types.ADD_PRODUCTO:
            let newItem = state.productos.find((producto) => producto.id === action.payload);
            let ItemCart = state.carrito.find((item)=> item.id === newItem.id);

            return ItemCart ?
            {...state,carrito: state.carrito.map(item => (item.id === newItem.id) ?{
                ...item,cantidad:item.cantidad +1} 
            : item )
            } 
            :{...state,carrito:[...state.carrito,{...newItem,cantidad:1}]};
        case types.DECREASE_ONE_PRODUCTO:

            let producto = state.carrito.find((producto) => producto.id === action.payload);
            
            return producto.cantidad > 1 ? 
            {
                ...state,carrito: state.carrito.map(item => (item.id === producto.id)?
                {...item,cantidad: item.cantidad -1}:item)
            }:{
                ...state,carrito: state.carrito.filter((item)=> item.id !== producto.id )
            }
            
        case types.REMOVE_PRODUCTO:
            return {...state,carrito: state.carrito.filter((item) => item.id != action.payload)}
        case types.REMOVE_TOTAL_PRODUCTOS:
            return {...state,carrito: []}
        default:
            return state;

    }
}
export default reducerEcommerce;