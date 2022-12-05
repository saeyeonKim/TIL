// src/modules/counter.js

// 초기 상태값(useState의 초기값설정과 같은 역할)
const initialState = {
  number: 0, // 객체 안에 number에 0이라는 초기값을 설정한다, 객체뿐만 아니라 배열이나 원시데이터, 0,1,2 이런식으로도 가능
};

// 리듀서 : 변화를 일으키는 함수(useState의 set함수 같은 역할)
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "PLUS_ONE":
      return { number: state.number + 1 }; //number에 state에 있는 number+1을 넣겠다.
    case "MINUS_ONE":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
