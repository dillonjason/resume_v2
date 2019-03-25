import * as React from 'react'
import * as _ from 'lodash'

import * as styles from './styles.scss'

import { Skill } from '../../types'

import { ListItem } from '../../../../components/list_item'

interface Props {
  skill: Skill
}

export const SkillItem = ({ skill }: Props) => (
  <div className={styles.container}>
    <h2 className={styles.header}>{skill.type}</h2>
    <div className={styles.details}>
      {skill.skillDetails.map(skillDetail => (
        <ListItem image={_.get(skillDetail, 'image.url')}>
          {skillDetail.description}
        </ListItem>
      ))}
    </div>
  </div>
)
