import * as React from 'react'
import * as styles from './styles.scss'

import { Form } from './components/form'
import { Name } from './components/name'
import { Summary } from './components/summary'
import { ExternalLinks } from './components/external_links'
import { Redirect } from 'react-router-dom'

interface Props {
  sidebar?: boolean
}

export const About = (props: Props) => {
  if (typeof window !== 'undefined' && !props.sidebar) {
    if (window.outerWidth > 992) return <Redirect to='/experience' />
  }

  return (
    <div className={styles.container}>
      <Name />
      <Summary />
      <Form />
      <ExternalLinks />
    </div>
  )
}
