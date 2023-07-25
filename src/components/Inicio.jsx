import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../functions/functions'
import '../styles/styles.css'


const Inicio = () => {
    const [personajes, setPersonajes] = useState(null)

useEffect (()=> {
todosPersonajes(setPersonajes)
}, [])


  return (
    <>
    <div className='container'>
        <div>
            <h1 className="titulo">Api de Rick and Morty primeros 20 personajes</h1>
        </div>
        <div className='container-card'>
    {personajes != null ? (
        personajes.map(personaje => (
            <div key={personaje.id} className='Card'>

                <div className="imagen">
                 <img src={personaje.image} alt="#"></img>
                </div>

                <div className="texto">
                 <p><span>Nombre </span> {personaje.name } </p>
                 <p><span>Especie </span>{personaje.species } </p>
                 <p><span>Género </span>{personaje.gender } </p>
                 
                </div>
            </div>
        ))
    ) : 
    
    ('no está funcionando') }
    </div>
    </div>
    </>
  )
}

export default Inicio
