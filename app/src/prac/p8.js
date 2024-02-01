import React from 'react'

function Getter({name, type}) {
  return <div>{`${name}는(은) ${type} 타입니다!`}</div>;
}

function PokemonList2(){
    // 어디에선가 가져오 상태 데이터라고 가정 (예 : API, DB 등 )
  // fetch()
  // DB.query()
  // 어떠한 출처로든 데이터가 배열 형태로 들어오면 아래의 컴포넌트는 실행된다.
  const pokemons = [ 
    { name : '피카츄', type:'전기'},
    { name : '파이리', type:'불'},
    { name : '꼬부기', type:'불'},
  ];
  return (
    <div>
      {pokemons.map((pokemon, index)=> (
        // Getter 함수로 받을수 있다
        <Getter key={index} name = {pokemon.name} type = {pokemon.type } />
      ))}
    </div>
  )
}

export default PokemonList2;