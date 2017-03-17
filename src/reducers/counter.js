import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0
  /* //spread 연습
  dummuy: 'dumbdumb',
  dumbObject: {
    d: 0,
    u: 1,
    m: 2,
    b: 3,
  },
  */
};

/*
export default function counter(state, action){
  if(typeof state === 'undefined') {
    return initialState;
  }
  */
export default function counter(state = initialState, action) {

  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
        /* //spread 연습
        dumbObject: { ...state.dumbObject, u: 0 },
        */
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return initialState;
  }
}
