import * as React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import * as styles from './styles.scss'

import { Portfolio } from '../../types'

import { ListItem } from '../../../../components/list_item'

interface Props {
  portfolio: Portfolio
}

export const PortfolioItem = ({ portfolio }: Props) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2 className={styles.projectName}>{portfolio.projectName}</h2>
      <div className={styles.role}>{portfolio.role}</div>
    </div>
    <div className={styles.description}>{portfolio.description}</div>
    {portfolio.portfolioImages.length && (
      <Carousel>
        {portfolio.portfolioImages.map(portfolioImage => (
          <img src={portfolioImage.image.url} />
        ))}
      </Carousel>
    )}

    <div className={styles.details}>
      {portfolio.portfolioSkills.map(portfolioSkill => (
        <ListItem>{portfolioSkill.skill}</ListItem>
      ))}
    </div>
  </div>
)
