import * as React from 'react'
import * as styles from './styles.scss'

import { Form } from './components/form'
import { Name } from './components/name'
import { ExternalLinks } from './components/external_links'

export const About = () => (
  <div className={styles.container}>
    <Name />
    <Form />
    <ExternalLinks />
  </div>
)
