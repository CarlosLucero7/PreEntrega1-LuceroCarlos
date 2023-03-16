

const Form = () => {
    const handleSubmit = () =>{

    }
  return (
    <div>
        <h1>Formulario</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre" />
            <input type="text" placeholder="Ingrese su e-mail"/>
            <button type="submit">Confirmar</button>
        </form>
    </div>
  )
}

export default Form