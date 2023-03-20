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