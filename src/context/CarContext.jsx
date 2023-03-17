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

    let data={
        cart,
        setCart,
        agregarCart,
        limpiarCart
    }

  return (
    <CarContext.Provider value={data}>
        {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider