// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.

const App = () => {
  const counterStore = useSelector((state) => state);
  // 위의 뜻은 const counterStore = useSelector(function(state){return state;}) 와 같은뜻
  const number = useSelector((state) => state.counter.number);
  console.log(counterStore);
  console.log(number);
  return <div></div>;
};

export default App;

// 총정리 :
// 1. module은 기능의 이름을 따서 파일을 생선한다. 구성요소로는 initialState, reducer가 있다.
// 2. module을 만들면 store에 연결해야한다.
// 3. componenet에서 store을 조회할 때는 useSelector를 사용해야한다.
// 4. useSelector, state는 모든 module에 state를 조회할 수 있는 값이다.*/
