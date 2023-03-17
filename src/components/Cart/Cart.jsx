import { useContext } from "react"
import { CarContext } from "../../context/CarContext"
import "./Cart.css"

const Cart = () => {

  const {cart, limpiarCart} = useContext(CarContext)

  return (
    <div>
      <h1>Carro de compras</h1>
      {
        cart.map(item => {
          return <div key={item.id} className="itemCart">
            <h3>{item.nombre}</h3>
            <h3>Precio: ${item.precio}</h3>
            <h3>Cantidad: {item.cantidad}</h3>
          </div>
        })
      }
      <button onClick={limpiarCart}>Vaciar carrito</button>
    </div>
  )
}
export default Cart