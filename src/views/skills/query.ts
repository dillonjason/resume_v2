import { gql } from 'apollo-boost'
import { ChildDataProps, graphql } from 'react-apollo'

import { Skill } from './types'

const query = gql`
  query {
    skills {
      type
      skillDetails {
        description
        image {
          url
        }
      }
    }
  }
`

type Response = {
  skills: Skill[]
}

type ChildProps = ChildDataProps<{}, Response>

export const withData = graphql<{}, Response, {}, ChildProps>(query)
