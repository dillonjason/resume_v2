import * as React from 'react'

import { withData } from './query'
import { ExperienceList } from './components/experience_list'
import { ContentContainer } from '../../components/content_container'
import { View } from '../../enums/view'

export const Experience = withData(({ data: { loading, experiences } }) => {
  let content = <div>Error :(</div>
  if (loading) content = <div>Loading...</div>
  if (experiences && experiences.length)
    content = <ExperienceList experiences={experiences} />

  return <ContentContainer view={View.experience}>{content}</ContentContainer>
})
