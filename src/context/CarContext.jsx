import { useState,createContext } from "react"

export const CarContext = createContext()

const CarContextProvider = ({children}) => { 

    const [cart, setCart] = useState([])

    const agregarCart = (prod) =>{
        
        setCart([...cart , prod])
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
        return total
    }

    let data={
        cart,
        setCart,
        agregarCart,
        limpiarCart,
        delprod,
        totalItem,
        precioTotal
    }

  return (
    <CarContext.Provider value={data}>
        {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider