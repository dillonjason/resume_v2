import { gql } from 'apollo-boost'
import { ChildDataProps, graphql } from 'react-apollo'

import { Portfolio } from './types'

const query = gql`
  query {
    portfolios {
      projectName
      role
      description
      portfolioSkills {
        skill
      }
      portfolioImages {
        image {
          url
        }
      }
    }
  }
`

type Response = {
  portfolios: Portfolio[]
}

type ChildProps = ChildDataProps<{}, Response>

export const withData = graphql<{}, Response, {}, ChildProps>(query)
