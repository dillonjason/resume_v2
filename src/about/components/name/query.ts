import { gql } from 'apollo-boost'
import { ChildDataProps, graphql } from 'react-apollo'

const query = gql`
  query {
    abouts {
      firstName
      lastName
      description
    }
  }
`

type About = {
  firstName: string
  lastName: string
  description: string
}

type Response = {
  abouts: About[]
}

type ChildProps = ChildDataProps<{}, Response>

export const withData = graphql<{}, Response, {}, ChildProps>(query)
