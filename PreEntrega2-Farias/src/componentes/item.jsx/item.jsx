import React from 'react'


const Item = ({productos}) => {
  return (
    <>
     {
            productos.map((producto, indice) => {
                return (
                    <div key={producto.id}>
                        <img src={producto.img} alt={producto.nombre} />
                        <h2>{producto.nombre}</h2>
                        <h2>{producto.precio}</h2>
                        <h2>{producto.stock}</h2>
                        <p>{producto.description}</p>
                    </div>
                )
            })
        }

    
    </>
  )
}

export default Item