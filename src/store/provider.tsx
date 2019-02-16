import * as React from 'react'
import { State, defaultState } from './state'
import { Action } from './actions'

export type Reducer = React.Reducer<State, Action>

interface Context {
  state: State
  dispatch: React.Dispatch<Action>
}

const StateContext = React.createContext<Context>({
  state: defaultState,
  dispatch: () => undefined
})

interface Props {
  defaultState: State
  reducer: Reducer
}

export const Provider: React.FC<Props> = ({
  defaultState,
  reducer,
  children
}) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}

type MapTo<TArgA, TArgB, TResult> = (a: TArgA, b: TArgB) => TResult

const withDefault = <TArgA, TArgB, TResult>(
  mapTo?: MapTo<TArgA, TArgB, TResult>
): MapTo<TArgA, TArgB, TResult> => (a: TArgA, b: TArgB) =>
  mapTo ? mapTo(a, b) : ({} as TResult)

export const connect = <TStateProps, TDispatchProps, TOwnProps = {}>(
  mapStateToProps?: (state: State, ownProps: TOwnProps) => TStateProps,
  mapDispatchToProps?: (
    dispatch: React.Dispatch<Action>,
    ownProps: TOwnProps
  ) => TDispatchProps
) => (
  Component: React.ComponentType<TStateProps & TDispatchProps & TOwnProps>
) => (props: TOwnProps) => (
  <StateContext.Consumer>
    {({ state, dispatch }) => (
      <Component
        {...props}
        {...withDefault(mapStateToProps)(state, props)}
        {...withDefault(mapDispatchToProps)(dispatch, props)}
      />
    )}
  </StateContext.Consumer>
)
