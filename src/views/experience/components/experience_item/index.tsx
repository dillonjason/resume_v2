import * as React from 'react'

import * as styles from './styles.scss'

import { Experience } from '../../types'

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
    <div className={styles.details}>
      {experience.experienceDetails.map(experienceDetail => (
        <div className={styles.detailItem}>{experienceDetail.detail}</div>
      ))}
    </div>
  </div>
)
