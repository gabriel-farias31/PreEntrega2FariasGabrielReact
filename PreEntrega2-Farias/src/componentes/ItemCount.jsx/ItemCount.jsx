import React, {useState} from 'react'

const ItemCount = () => {

    const [contador,setContador] = useState(1);

    const restar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const sumar = () => {
        if(contador < 5){
            setContador(contador+1)
        }
    }

    const agregarCarrito = () => {
console.log(contador)
    }

  return (
    <div>

     <p>Cantidad: {contador}</p>

        <button onClick={restar}>-</button>

        <button onClick={agregarCarrito}>Agregar al carrito</button>

        <button onClick={sumar}>+</button>

    </div>
  )
}

export default ItemCount;