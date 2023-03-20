import {addDoc,collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { CarContext } from "../../context/CarContext"
import { database } from '../../firebaseConfig'


const FormCompra = () => {
    const {cart, precioCompra, limpiarCart} = useContext(CarContext)

    const handleSubmit = (e)=> {
        e.preventDefault()
        alert("Se realizo la compra")

        const order = {
            Cliente: data,
            Compra: cart,
            Total: precioCompra(),
            Fecha: serverTimestamp()
        }
        const orderCollection = collection(database,"Ordenes")

        addDoc(orderCollection, order)

        limpiarCart()
    }

    const [data, setData] = useState({Nombre: "",Correo:""})
  return (
    <div className='cart1'>
        <form onSubmit={handleSubmit} action="" className='form'>
            <h4>Nombre del cliente:</h4>
            <input type="text" placeholder='Ingrese su nombre' onChange={(e) => setData({...data, Nombre: e.target.value})}/>
            <h4>Correo eleectronico:</h4>
            <input type="email" placeholder='Ingrese su correo electronico' onChange={(e) => setData({...data, Correo: e.target.value})}/>
            <div>
            <button type='submit'>Comprar</button>
            </div>
        </form>
    </div>
  )
}

export default FormCompra