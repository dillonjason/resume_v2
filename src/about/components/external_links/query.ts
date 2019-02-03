import { gql } from 'apollo-boost'
import { ChildDataProps, graphql } from 'react-apollo'

const query = gql`
  query {
    abouts {
      email
      gitHub
      resume
    }
  }
`

type About = {
  email: string
  gitHub: string
  resume: string
}

type Response = {
  abouts: About[]
}

type ChildProps = ChildDataProps<{}, Response>

export const withData = graphql<{}, Response, {}, ChildProps>(query)
