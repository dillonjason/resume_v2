import { gql } from 'apollo-boost'
import { ChildDataProps, graphql } from 'react-apollo'

import { Experience } from './types'

const query = gql`
  query {
    experiences(orderBy: startDate_DESC) {
      company
      startDate
      endDate
      position
      experienceDetails {
        detail
      }
    }
  }
`

type Response = {
  experiences: Experience[]
}

type ChildProps = ChildDataProps<{}, Response>

export const withData = graphql<{}, Response, {}, ChildProps>(query)
