import "./ItemCount.css"
import { useState } from 'react'

const ItemCount = ({stock,initial = 1,onAdd}) => {

    const [contador, setContador] = useState(initial)

    const sumar =() =>{
      if(contador<stock){
        setContador(contador + 1)
      }
    }

    const restar =() =>{
      if (contador>1){
        setContador(contador - 1)
      } 
        
    }

  return (
    <div className='contador'>
        <h4 className="cant">Cantidad:</h4>
        <button onClick={restar} className='boton'>-</button>
        <h3 className="cantidad">{contador}</h3>
        <button onClick={sumar} className='boton'>+</button>
        <button onClick={()=> onAdd(contador)} className="carro">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount