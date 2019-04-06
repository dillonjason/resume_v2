import * as React from 'react'

import { withData } from './query'
import { PortfolioList } from './components/portfolio_list'
import { ContentContainer } from '../../components/content_container'
import { View } from '../../enums/view'

export const Portfolio = withData(({ data: { loading, portfolios } }) => {
  let content = <div>Error :(</div>
  if (loading) content = <div>Loading...</div>
  if (portfolios && portfolios.length)
    content = <PortfolioList portfolios={portfolios} />

  return <ContentContainer view={View.portfolio}>{content}</ContentContainer>
})
