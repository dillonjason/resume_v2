import * as React from 'react'

import { withData } from './query'
import * as styles from './styles.scss'
import { PortfolioList } from './components/portfolio_list'

export const Portfolio = withData(({ data: { loading, portfolios } }) => {
  let content = <div>Error :(</div>
  if (loading) content = <div>Loading...</div>
  if (portfolios.length) content = <PortfolioList portfolios={portfolios} />

  return <div className={styles.container}>{content}</div>
})
