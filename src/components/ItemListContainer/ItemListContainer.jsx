import "./ItemListContainer.css"
import { GiSpellBook } from "react-icons/gi"

function ItemListContainer({greeting}){
    return(
        <div className="bienvenida">
            <h1>{greeting}</h1>
            <GiSpellBook size="100px" color="#fdf9f2"/>
        </div>
    )
}

export default ItemListContainer