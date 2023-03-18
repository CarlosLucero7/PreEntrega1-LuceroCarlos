import { useContext } from "react"
import { CarContext } from "../../context/CarContext"
import "./Cart.css"

const Cart = () => {

  const {cart, limpiarCart, delprod, precioTotal} = useContext(CarContext)

  return (
    <div className="shopCart">
      <h1>Carro de compras</h1>
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
      <div className="cart">
        <h1>El total de su compra es: ${precioTotal()}</h1>
        <button>Confirmar compra</button>
        <button onClick={limpiarCart}>Vaciar carrito</button>
      </div>
    </div>
  )
}
export default Cart