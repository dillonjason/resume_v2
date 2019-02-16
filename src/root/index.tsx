import * as React from 'react'
import { History } from 'history'

import { Provider } from '../store/provider'
import { defaultState } from '../store/state'
import { reducer } from '../store/reducer'

import { About } from '../about'
import { Content } from '../content'
import * as styles from './styles.scss'

interface Props {
  history: History
}

export const Root: React.FC<Props> = ({ history }) => {
  const state = {
    ...defaultState,
    page: history.location.pathname
  }

  return (
    <Provider defaultState={state} reducer={reducer}>
      <div className={styles.container}>
        <About />
        <Content />
      </div>
    </Provider>
  )
}
