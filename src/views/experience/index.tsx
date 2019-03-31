import * as React from 'react'

import { withData } from './query'
import * as styles from './styles.scss'
import { ExperienceList } from './components/experience_list'

export const Experience = withData(({ data: { loading, experiences } }) => {
  let content = <div>Error :(</div>
  if (loading) content = <div>Loading...</div>
  if (experiences && experiences.length)
    content = <ExperienceList experiences={experiences} />

  return <div className={styles.container}>{content}</div>
})
