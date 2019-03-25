import * as React from 'react'

import * as styles from './styles.scss'

import { Experience } from '../../types'
import { ExperienceItem } from '../experience_item'

interface Props {
  experiences: Experience[]
}

export const ExperienceList = ({ experiences }: Props) => (
  <div className={styles.container}>
    {experiences.map(experience => (
      <ExperienceItem experience={experience} />
    ))}
  </div>
)
