// src/App.js
import React, { useState } from 'react';

function App() {
  // 상태 설정 예시
  const [count, setCount] = useState(0);

  // 이벤트 처리 함수
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}

function App2(){
  // const 
}

export default App;
