import { useState,createContext } from "react"
import Swal from 'sweetalert2'

export const CarContext = createContext()

const CarContextProvider = ({children}) => { 

    const [cart, setCart] = useState([])

    const agregarCart = (prod) =>{
        
        setCart([...cart , prod])
        Swal.fire({
            position: 'top-end',         
            width: 300,
            heigth: 100,
            title: 'Producto agregado!',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const limpiarCart = () =>{
        setCart([])
    }

    const delprod = (id) =>{
        let newCart = cart.filter(prod => prod.id !== id);
        setCart(newCart)

    }

    const totalItem = () =>{
        return cart.length
    }

    const precioTotal = () =>{
        const total = cart.reduce((acc, element)=>{
            return acc + (element.precio * element.cantidad)
        },0)

        if(total === 0){
            return "Su carro de compras esta vacio!"
        }else{
            return `El total de su compra es: $`+total
        }
    }

    const precioCompra = ()=>{
        const total = cart.reduce((acc, element)=>{
            return acc + (element.precio * element.cantidad)
        },0)

        return total
    }

    let data={
        cart,
        setCart,
        agregarCart,
        limpiarCart,
        delprod,
        totalItem,
        precioTotal,
        precioCompra
    }

  return (
    <CarContext.Provider value={data}>
        {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider