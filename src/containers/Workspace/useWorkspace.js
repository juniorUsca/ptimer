import { useReducer } from 'react'

export const initialState = {
  id: '',
  name: '',
  picture: '',
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'set':
      return {
        ...state,
        [payload.key]: payload.value,
      }
    case 'update':
      return { ...payload }
    case 'reset':
      return { ...initialState }
    default: throw new Error()
  }
}

const useWorkspace = defaultWorkspace => useReducer(reducer, defaultWorkspace || initialState)

export default useWorkspace
