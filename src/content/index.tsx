import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as styles from './styles.scss'

import { Home } from '../home'
import { About } from '../about'

export const Content = () => (
  <div className={styles.container}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  </div>
)
