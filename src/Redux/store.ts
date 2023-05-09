import { legacy_createStore as createStore, combineReducers } from 'redux'
import filesReducer from './Reducers/AboutMe/FilesReducer'

const rootReducer = combineReducers({
  files: filesReducer,
})

export const store = createStore(rootReducer)
