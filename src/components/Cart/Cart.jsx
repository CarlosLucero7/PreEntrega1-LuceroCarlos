import { useContext, useState } from "react"
import { CarContext } from "../../context/CarContext"
import FormCompra from "../FormCompra/FormCompra"
import "./Cart.css"

const Cart = () => {

  const {cart, limpiarCart, delprod, precioTotal} = useContext(CarContext)
  const [buy,setBuy]= useState(false)

    return (
      <div className="shopCart">
        <h1>Carro de compras</h1>
        {
          !buy ? 
          (<div className="cart1">
          <h2 className="prodSel">Productos seleccionados</h2>
        {
          cart.map(item => {
            return <div key={item.id} className="itemCart">
              <h3>{item.nombre}</h3>
              <h3>Precio: ${item.precio}</h3>
              <h3>Cantidad: {item.cantidad}</h3>
              <button onClick={()=> delprod(item.id)}>Quitar producto</button>
            </div>
          })
        }
        </div>): (<FormCompra/>)
        }
        <div className="cart2">
          <h2>{precioTotal()}</h2>
          <div className="btnCart">
          <button onClick={() => setBuy(true)}>Confirmar compra</button>
          <button onClick={limpiarCart}>Vaciar carrito</button>
          </div>
          
        </div>
      </div>
  )
}
export default Cart