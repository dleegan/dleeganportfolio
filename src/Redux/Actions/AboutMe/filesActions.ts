export const addFile = (name: string) => {
  console.log('addFile=>', name);

  return {
    type: 'ADD_FILE',
    payload: {name},
  };
};

export const removeFile = (name: string) => {
  console.log('removeFile=>', name);

  return {
    type: 'REMOVE_FILE',
    payload: {name},
  };
};

export const selectFile = (name: string) => {
  console.log('selectFile=>', name);

  return {
    type: 'SELECT_FILE',
    payload: {name},
  };
};
