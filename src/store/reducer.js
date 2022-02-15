import {ActionType} from '../store/actions';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ACTION:
      return {
        ...state,
        data: action.payload,
      };
  };
  return state;
};

export {reducer};
