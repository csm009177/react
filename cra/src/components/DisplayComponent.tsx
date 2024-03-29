import React, { useContext } from 'react';
import MyContext from './MyContext';

const DisplayComponent: React.FC = () => {
    const { state } = useContext(MyContext);
    // 부모 컴포넌트에서 전달받은 state를 가져옵니다.
    return <div>{state}</div>;
};

export default DisplayComponent;