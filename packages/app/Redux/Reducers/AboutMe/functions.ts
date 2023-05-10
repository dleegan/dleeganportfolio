import {Payload, State} from './reducerTypes';

export const addFileFunction = (state: State, payload: Payload) => {
  console.log('ADD_FILE', state);
  let newState = {...state};

  //@ts-ignore
  if (!state.filesList.includes(payload.name))
    newState.filesList = [...newState.filesList, payload.name];
  newState.selectedFile = payload.name;
  return newState;
};

export const removeFileFunction = (state: State, payload: Payload) => {
  console.log('REMOVE_FILE', state);
  let newState = {...state};
  let lastIndex = newState.filesList.findIndex(it => it === payload.name);

  lastIndex =
    lastIndex - 1 < 0
      ? 1
      : lastIndex + 1 > newState?.filesList.length - 1
      ? lastIndex - 1
      : lastIndex + 1;

  newState.selectedFile =
    payload.name === state.selectedFile
      ? newState.filesList[lastIndex] && newState.filesList[lastIndex]
      : state.selectedFile;

  newState.filesList = [
    ...newState.filesList.filter((it: string) => it !== payload.name),
  ];
  return newState;
};

export const selectFileFunction = (state: State, payload: Payload) => {
  console.log('SELECT_FILE', state);

  return {
    ...state,
    selectedFile: payload.name,
  };
};
