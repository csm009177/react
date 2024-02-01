import React from "react";

function Testing({ name }) {
  return <div>{name}</div>;
}

function PokemonList2() {
  // 어디에선가 가져오 상태 데이터라고 가정 (예 : API, DB 등 )
  // fetch()
  // DB.query()
  // 어떠한 출처로든 데이터가 배열 형태로 들어오면 아래의 컴포넌트는 실행된다.
  const pokemons = [
    { name: "피카츄", type: "전기" },
    { name: "파이리", type: "불" },
    { name: "꼬부기", type: "불" },
  ];
  return (
    <div>
      {pokemons.map((pokemon) => (
        <Testing name = {pokemon.name}/>
      ))}
    </div>
  );
}

export default PokemonList2;
