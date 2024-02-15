import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';


const ItemListConteiner = ({ greeting }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("./productos.json");
                const data = await response.json()
                setProductos(data)
            } catch (error) {
                console.log("error", error)

            }
        }
        fetchData()


    }, [])

    console.log(productos)


    return (
        <div>
            <h2>{greeting}</h2>

            {productos.length == 0
                ?
                <h1>CARGANDO..</h1>
                :
              <ItemList productos={productos}/>
            }




        </div>
    )
}

export default ItemListConteiner