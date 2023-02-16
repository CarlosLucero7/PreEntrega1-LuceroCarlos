import "./ItemCount.css"
import { useState } from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const sumar =() =>{
        setContador(contador + 1)
    }

    const restar =() =>{
        setContador(contador - 1)
    }

  return (
    <div className='contador'>
        <h4 className="cant">Cantidad:</h4>
        <button onClick={restar} className='boton'>-</button>
        <h3 className="cantidad">{contador}</h3>
        <button onClick={sumar} className='boton'>+</button>
        <button className="carro">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount