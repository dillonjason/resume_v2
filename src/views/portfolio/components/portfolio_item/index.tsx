import * as React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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
    {portfolio.portfolioImages.length > 0 && (
      <div className={styles.carouselContainer}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay
          infiniteLoop
          interval={4000}
        >
          {portfolio.portfolioImages.map(portfolioImage => (
            <div className={styles.slideContainer}>
              <img src={portfolioImage.image.url} />
            </div>
          ))}
        </Carousel>
      </div>
    )}

    <div className={styles.details}>
      {portfolio.portfolioSkills.map(portfolioSkill => (
        <ListItem>{portfolioSkill.skill}</ListItem>
      ))}
    </div>
  </div>
)
