import React, { usecontext } from 'react'
import MyContext from './MyContext'

const ChildComponent : React.FC = () => {
  const {state, setState } = useContext(MyContext);
  /**
   * useState가 아닌, useContext를 사용하여 state와 setState를 가져옵니다
   * MyContext 파일에서는 'context'를 전역 상태 관리용으로 사용하기 위해
   * createContext를 사용하여 'context를 생성하고, 이를 export 했습니다
   * const MyContext = createContext<any>(null); <-MyContext의 주요 코드
   * 무엇이든지 상관없이 넣을 수 있도록 any 타입으로 지정하고, 비어있다는 뜻의 null을 사용해
   * 초기 상태를 비어잇게끔 지정했습니다
   * 
   */

  //아래의 이벤트 핸들러는 '클릭'에 동작하기 위해 작성되어 있는 함수 입니다

  const toggleState = () => {
    const newState = state === 'true' ? 'false' : 'true';
    // 이벤트가 동작하고 나면 위, useContext를 사용하여 가져온 state의 값이 새로운 상태로 변경됩니다
    setState(newState)
  };
  // 사실상 해당 컴포넌트는 버튼을 누르는 일만하며, 무언가를 '직접적으로' 변경시키지 않습니다

  return (
    <button onClick={toggleState}>상태 토글</button>
  );
};

export default ChildComponent;