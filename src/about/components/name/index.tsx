import * as React from 'react'

import { withData } from './query'

export const Name = withData(({ data: { loading, error, abouts } }) => {
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

  return <h1>{abouts[0].firstName}</h1>
})
