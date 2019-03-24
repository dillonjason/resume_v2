import * as React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import * as styles from './styles.scss'

import { About } from '../views/about'
import { Experience } from '../views/experience'
import { Skills } from '../views/skills'
import { Portfolio } from '../views/portfolio'

export const Content = () => (
  <div className={styles.container}>
    <div className={styles.navList}>
      <NavLink
        exact
        to='/'
        className={`${styles.navItem} ${styles.about}`}
        activeClassName={styles.active}
      >
        Dillon Jason
      </NavLink>
      <NavLink
        to='/experience'
        activeClassName={styles.active}
        className={`${styles.navItem} ${styles.experience}`}
      >
        Experience
      </NavLink>
      <NavLink
        to='/skills'
        activeClassName={styles.active}
        className={`${styles.navItem} ${styles.skills}`}
      >
        Skills
      </NavLink>
      <NavLink
        to='/portfolio'
        activeClassName={styles.active}
        className={`${styles.navItem} ${styles.portfolio}`}
      >
        Portfolio
      </NavLink>
    </div>
    <Switch>
      <Route exact path='/' component={About} />
      <Route path='/experience' component={Experience} />
      <Route path='/skills' component={Skills} />
      <Route path='/portfolio' component={Portfolio} />
    </Switch>
  </div>
)
