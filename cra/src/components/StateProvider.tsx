import React, { useState } from 'react';
import MyContext from './MyContext';

/* 
  아래의 StateProvider라는 이름의 컴포넌트는 이름은 provider이지만,
  실제로는 context를 사용하는 컴포넌트입니다.

  return 부분에서 createContext를 사용한 컴포넌트, MyContext의 Provider를 사용하고 있습니다.
  이 Provider 컴포넌트는 value라는 props를 받습니다.

  useState에서 흔히 사용하는 [state, setState]와 같은 형태를 '자식 컴포넌트'에게 쥐어주는 규칙입니다.

  전역상태를 관리할때는 상태 값을 부모로 부터 받아오는 것이 아니라,
  '부모가' 자식에게 값을 전달하는 방식으로 값을 전달합니다.
  여기서 value가 자식에게 주는 상태 값이며, 이를 자식 컴포넌트에서는 useContext를 사용하여 가져옵니다.

*/

const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState("true"); 
    // 여기에서는 useState를 사용하여 state를 생성하고, 이를 value에 넣어줍니다.
    // 이렇게 하면, 자식 컴포넌트에서는 useContext를 사용하여 state를 가져올 수 있습니다.
    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
};

export default StateProvider;