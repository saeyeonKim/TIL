// // // src/modules/counter.js

// // // 초기 상태값(useState의 초기값설정과 같은 역할)
// // const initialState = {
// //   number: 0, // 객체 안에 number에 0이라는 초기값을 설정한다, 객체뿐만 아니라 배열이나 원시데이터, 0,1,2 이런식으로도 가능
// // };

// // // 리듀서 : 변화를 일으키는 함수(useState의 set함수 같은 역할)
// // const counter = (state = initialState, action) => {
// //   console.log(action);
// //   switch (action.type) {
// //     // action 안에 있는 type을 switch문으로 하나씩 검사해서 일치하는 케이스를 찾는다.
// //     // type이라는 키는 반드시 action객체를 포함해야 한다.
// //     // type과 case가 일치하는 경우에는 해당 코드가 실행이 되고 실행되서 나온 새로운 state를 반환한다.
// //     // reducer가 새로운 state를 반환하면 그것이 새로운 module에 state가 된다.
// //     case "PLUS_ONE":
// //       return { number: state.number + 1 }; //number에 state에 있는 number+1을 넣겠다.
// //     case "MINUS_ONE":
// //       return { number: state.number - 1 }; //number에 state에 있는 number-1을 넣겠다.
// //     default:
// //       return state;
// //   }
// // };

// // // 모듈파일에서는 리듀서를 export default 한다.
// // export default counter;

// // 여기부터 part.5
// // src/modules/counter.js

// // 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
// const PLUS_ONE = "PLUS_ONE";
// const MINUS_ONE = "MINUS_ONE";

// // 추가된 코드 👇 - Action Creator를 만들어 줍니다.
// export const plusOne = () => {
//   return {
//     type: PLUS_ONE,
//     payload:10
//   };
// };

// export const minusOne = () => {
//   return {
//     type: MINUS_ONE,
//   };
// };

// // 초기 상태값
// const initialState = {
//   number: 0,
// };

// // 리듀서
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
//       return {
//         number: state.number + 1,
//       };
//     case MINUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// };

// export default counter;

// 여기부터 part6

// src/redux/modules/counter/js

// Action/value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
// Action/Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload: payload, // 줄여서 payload로만 작성 가느ㅏㅇ
  };
};
export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload: payload,
  };
};
// Initial/State
const initialState = {
  number: 0,
};
// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    case MINUS_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
};
// export/default/reducer
export default counter;
