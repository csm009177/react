import React from 'react'

const PokemonList = () => {
  const pokeList = ['피카', '리카', '자카', '마카']

  const update = pokeList.map((name)=> {
    if(name==="자카"){
      return "버카"
    }
    return name
  })
  const element = update.map((name, index)=>(
    <div key={index}>
      <p>{name}</p>
    </div>
  ))
  return <div>{element}</div>
}
export default PokemonList;