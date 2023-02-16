import Contenedor from "../Contenedor/Contenedor"

const ItemList = ({items}) => {

  return (
    <div>
        {
            items.map((prod) => {
                return <Contenedor prod = {prod} key = {prod.id} />
            })
        }
    </div>
  )
}

export default ItemList