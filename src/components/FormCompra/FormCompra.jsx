import {addDoc,collection,updateDoc,doc, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarContext } from "../../context/CarContext"
import { database } from '../../firebaseConfig'
import Swal from 'sweetalert2'


const FormCompra = () => {
    const {cart, precioCompra, limpiarCart} = useContext(CarContext)

    const handleSubmit = (e)=> {
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
          })

        const order = {
            Cliente: data,
            Compra: cart,
            Total: precioCompra(),
            Fecha: serverTimestamp()
        }
        const orderCollection = collection(database,"Ordenes")
            addDoc(orderCollection, order)
            limpiarCart()
        cart.map(prod => {
            updateDoc(doc(database,"productos", prod.id), {stock: prod.stock - prod.cantidad} )
        })
    }

    const [data, setData] = useState({Nombre: "",Correo:""})
  return (
    <div className='cart1'>
        <form onSubmit={handleSubmit} action="" className='form'>
            <h4>Nombre del cliente:</h4>
            <input type="text" placeholder='Ingrese su nombre' onChange={(e) => setData({...data, Nombre: e.target.value})}/>
            <h4>Correo eleectronico:</h4>
            <input type="email" placeholder='Ingrese su correo electronico' onChange={(e) => setData({...data, Correo: e.target.value})}/>
            <div className='btnCart'>
            <button type='submit'>Comprar</button>
            <Link to="/"><button>Volver al catalogo</button></Link>
            </div>
        </form>
    </div>
  )
}

export default FormCompra