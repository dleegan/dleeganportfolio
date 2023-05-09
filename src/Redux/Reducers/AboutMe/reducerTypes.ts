export type State = {
  filesList: Array<string> | [];
  selectedFile: string;
};

export type Payload = {
  name: string;
};

export type Action = {
  type: string;
  payload: Payload;
};
