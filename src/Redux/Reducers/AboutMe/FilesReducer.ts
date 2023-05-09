import {
  addFileFunction,
  removeFileFunction,
  selectFileFunction,
} from './functions';
import {Action, State} from './reducerTypes';

const initialState = {
  filesList: [],
  selectedFile: '',
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_FILE':
      return addFileFunction(state, action.payload);
    case 'REMOVE_FILE':
      return removeFileFunction(state, action.payload);
    case 'SELECT_FILE':
      return selectFileFunction(state, action.payload);
    default:
      return state;
  }
};
