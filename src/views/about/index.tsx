import * as React from 'react'
import * as styles from './styles.scss'

import { Form } from './components/form'
import { Name } from './components/name'
import { Summary } from './components/summary'
import { ExternalLinks } from './components/external_links'
import { Redirect } from 'react-router-dom'
import { ContentContainer } from '../../components/content_container'
import { View } from '../../enums/view'

interface Props {
  sidebar?: boolean
}

export const About = (props: Props) => {
  if (typeof window !== 'undefined' && !props.sidebar) {
    if (window.outerWidth > 992) return <Redirect to='/experience' />
  }

  return (
    <ContentContainer view={View.about} showBar={!props.sidebar}>
      <div className={styles.content}>
        <Name />
        <Summary />
        <Form />
        <ExternalLinks />
      </div>
    </ContentContainer>
  )
}
