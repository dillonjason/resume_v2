import * as React from 'react'

import * as styles from './styles.scss'

import { Portfolio } from '../../types'
import { PortfolioItem } from '../portfolio_item'

interface Props {
  portfolios: Portfolio[]
}

export const PortfolioList = ({ portfolios }: Props) => (
  <div className={styles.container}>
    {portfolios.map(portfolio => (
      <PortfolioItem portfolio={portfolio} />
    ))}
  </div>
)
