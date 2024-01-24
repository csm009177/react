import {createContext} from 'react';
const MyContext = createContext<any>(null);
console.dir(MyContext)
// MyContext 데이터 타입은 단순 객체 입니다

export default MyContext;