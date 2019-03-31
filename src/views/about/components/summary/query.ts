import { gql } from 'apollo-boost'
import { ChildDataProps, graphql } from 'react-apollo'

const query = gql`
  query {
    abouts {
      summary
      image {
        url
      }
    }
  }
`

type Image = {
  url: string
}

type About = {
  summary: string
  image: Image
}

type Response = {
  abouts: About[]
}

type ChildProps = ChildDataProps<{}, Response>

export const withData = graphql<{}, Response, {}, ChildProps>(query)
