import React from "react";

/** 
 * " Function() " vs " Const = () => "
 * 간략하게 그 둘의 차이를 말하자면, 범위 ( Scope)의 차이라고 정의 할 수 있겠다.
 * 1) function () 같은 경우는 다른 문장의 가장 상단에서 읽히는 hoisting 이 허용이 되고,
 * 2)const = () => 같은 경우에는 block 내부에서만 구현이 가능한 범위를 가지고 있으며, 
 * 다시 선언이 될 수 없다는 특징을 가지고 있다.
 * 위와 같은 이유를 통해, 일반적으로는 hoisting을 지원하는 function을 더 선호한다.
*/
const PokemonList = () => {
  // 1. 포켓몬 데이터 배열
  const pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"];

  // 2. 배열을 수정하여 특정 포켓몬의 이름을 변경
  const updatedPokemon = pokemon.map((pokemonName) => {
    if (pokemonName === "파이리") {
      return "버터풀";
    }
    return pokemonName;
  });

  // 3. 수정된 배열을 사용하여 React 엘리먼트 생성
  const pokemonElement = updatedPokemon.map((pokemonName, index) => (
    <div key={index}>
      <p>{pokemonName}</p>
    </div>
  ));

  // 4. 최종적으로 화면에 렌더링
  return <div>{pokemonElement}</div>;
};

export default PokemonList;

/**
 * pokemon 배열에 포켓몬 데이터가 저장되어 있습니다.
 * map 함수를 사용하여 배열을 순회하면서 "파이리"인 경우에만 이름을 "버터풀"로 변경합니다. (updatedPokemon 배열)
 * updatedPokemon 배열을 사용하여 React 엘리먼트를 생성합니다. 
 * 각 포켓몬 이름은 <p> 태그 안에 넣어져 있는 <div>로 묶입니다.
 * 최종적으로 <div>{pokemonElement}</div>를 반환하여 화면에 렌더링됩니다. 
 * 이로써 수정된 포켓몬 리스트가 화면에 표시됩니다.
 */