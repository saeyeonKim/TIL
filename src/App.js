// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.

const App = () => {
  // const counterStore = useSelector((state) => state);
  // // 위의 뜻은 const counterStore = useSelector(function(state){return state;}) 와 같은뜻
  // // 화살표 함수에서 꺼낸 state 인자는 현재 프로젝트에서 존재하는 모든 redux module의 state를 가져와라 라는 뜻!
  // const number = useSelector((state) => state.counter.number);
  // // state 안에 counter 안에 있는 number를 가져와라 라는 뜻!
  // console.log(counterStore); // 값: number:0
  // console.log(number); // 값 : 0

  const dispatch = useDispatch(); // dispatch는 함수여서 꼭 괄호 붙여야된다. 괄호 안에 action 객체를 넣음.
  const number = useSelector((state) => state.counter.number);
  console.log(number);
  return (
    <div>
      {number}
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
          // onclick을 했을 때 dispatch를 통해서 PLUS_ONE이라는 action을 실행하라는 뜻.
          // dispatch를 통해서 action 객체를 reducer로 보낼 수 있다.
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MINUS_ONE" });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;

// 총정리 :
// 1. module은 기능의 이름을 따서 파일을 생선한다. 구성요소로는 initialState, reducer가 있다.
// 2. module을 만들면 store에 연결해야한다.
// 3. componenet에서 store을 조회할 때는 useSelector를 사용해야한다.
// 4. useSelector, state는 모든 module에 state를 조회할 수 있는 값이다.*/
