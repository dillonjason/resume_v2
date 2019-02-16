import * as React from 'react'

import { State } from './state'
import { Action } from './actions'

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page
      }

    default:
      return state
  }
}
