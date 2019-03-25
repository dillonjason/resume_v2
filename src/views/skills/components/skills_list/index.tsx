import * as React from 'react'

import * as styles from './styles.scss'

import { Skill } from '../../types'
import { SkillItem } from '../skills_item'

interface Props {
  skills: Skill[]
}

export const SkillsList = ({ skills }: Props) => (
  <div className={styles.container}>
    {skills.map(skill => (
      <SkillItem skill={skill} />
    ))}
  </div>
)
