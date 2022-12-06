// // src/App.js

// import React from "react";
// import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
// import {minusOne, plusOne} from "./redux/modules/counter";
// // action creator가 외부에서 사용되려면 export가 되어있어야하고 export된 action creator들을 컴포넌트에서 import한다.

// const App = () => {
//   // const counterStore = useSelector((state) => state);
//   // // 위의 뜻은 const counterStore = useSelector(function(state){return state;}) 와 같은뜻
//   // // 화살표 함수에서 꺼낸 state 인자는 현재 프로젝트에서 존재하는 모든 redux module의 state를 가져와라 라는 뜻!
//   // const number = useSelector((state) => state.counter.number);
//   // // state 안에 counter 안에 있는 number를 가져와라 라는 뜻!
//   // console.log(counterStore); // 값: number:0
//   // console.log(number); // 값 : 0

//   const dispatch = useDispatch(); // dispatch는 함수여서 꼭 괄호 붙여야된다. 괄호 안에 action 객체를 넣음.
//   const number = useSelector((state) => state.counter.number);
//   console.log(number);
//   return (
//     <div>
//       {number}
//       <button
//         onClick={() => {
//           dispatch(plusOne());
//           // onclick을 했을 때 dispatch를 통해서 PLUS_ONE이라는 action을 실행하라는 뜻.
//           // dispatch(전달자함수)를 통해서 action 객체를 reducer로 보낼 수 있다.
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           dispatch(minusOne());
//         }}
//       >
//         -1
//       </button>
//     </div>
//   );
// };

// export default App;

// 총정리 :
// 1. module은 기능의 이름을 따서 파일을 생선한다. 구성요소로는 initialState, reducer가 있다.
// 2. module을 만들면 store에 연결해야한다.
// 3. componenet에서 store을 조회할 때는 useSelector를 사용해야한다.
// 4. useSelector, state는 모든 module에 state를 조회할 수 있는 값이다.*/

// action creator를 사용하는 이유!
// 1. 휴먼에러를 방지할 수 있다. action객체 type value를 상수로 만들어 놓았기 때문에 개발툴에서 자동완성보조기능을 지원받을 수 있다.
// 2. 유지보수 효율성이 증가한다.
// 3. 코드 가독성이 좋아진다.

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber } from "./redux/modules/counter";
import { minusNumber } from "./redux/modules/counter";

const App = () => {
  const [number, setNumber] = useState(0);
  const globalNubmer = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value); // value가 위에서 자동으로 문자열로 되어있어서 숫자형으로 형변환하기 위해 +를 붙인다.
  };
  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };
  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };
  console.log(number);
  return (
    <div>
      {globalNubmer}
      <input type="number" onChange={onChangeHandler}></input>
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};
export default App;
