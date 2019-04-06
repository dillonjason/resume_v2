import * as React from 'react'

import { withData } from './query'
import { SkillsList } from './components/skills_list'
import { ContentContainer } from '../../components/content_container'
import { View } from '../../enums/view'

export const Skills = withData(({ data: { loading, skills } }) => {
  let content = <div>Error :(</div>
  if (loading) content = <div>Loading...</div>
  if (skills && skills.length) content = <SkillsList skills={skills} />

  return <ContentContainer view={View.skills}>{content}</ContentContainer>
})
