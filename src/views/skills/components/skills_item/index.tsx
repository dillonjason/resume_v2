import * as React from 'react'
import * as _ from 'lodash'

import * as styles from './styles.scss'

import { Skill } from '../../types'

import { ListItem } from '../../../../components/list_item'
import { ListGrid } from '../../../../components/list_grid'

interface Props {
  skill: Skill
}

export const SkillItem = ({ skill }: Props) => (
  <div className={styles.container}>
    <h2 className={styles.header}>{skill.type}</h2>
    <ListGrid>
      {skill.skillDetails.map(skillDetail => (
        <ListItem image={_.get(skillDetail, 'image.url')}>
          {skillDetail.description}
        </ListItem>
      ))}
    </ListGrid>
  </div>
)
