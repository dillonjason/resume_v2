import * as React from 'react'

import { withData } from './query'
import * as styles from './styles.scss'
import { SkillsList } from './components/skills_list'

export const Skills = withData(({ data: { loading, skills } }) => {
  let content = <div>Error :(</div>
  if (loading) content = <div>Loading...</div>
  if (skills && skills.length) content = <SkillsList skills={skills} />

  return <div className={styles.container}>{content}</div>
})
