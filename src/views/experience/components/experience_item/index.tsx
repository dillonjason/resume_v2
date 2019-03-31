import * as React from 'react'

import * as styles from './styles.scss'

import { Experience } from '../../types'

import { ListItem } from '../../../../components/list_item'
import { ListGrid } from '../../../../components/list_grid'

interface Props {
  experience: Experience
}

export const ExperienceItem = ({ experience }: Props) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.title}>
        <h2 className={styles.company}>{experience.company}</h2>
        <div className={styles.position}>{experience.position}</div>
      </div>
      <div>
        {new Date(experience.startDate).getFullYear()} -{' '}
        {experience.endDate
          ? new Date(experience.endDate).getFullYear()
          : 'Current'}
      </div>
    </div>
    <ListGrid>
      {experience.experienceDetails.map(experienceDetail => (
        <ListItem>{experienceDetail.detail}</ListItem>
      ))}
    </ListGrid>
  </div>
)
