import * as React from 'react'

import { withData } from './query'
import * as styles from './styles.scss'

export const Name = withData(({ data: { loading, error, abouts } }) => {
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

  return (
    <div className={styles.container}>
      <h1>
        {abouts[0].firstName} {abouts[0].lastName}
      </h1>
      <h3>{abouts[0].description}</h3>
    </div>
  )
})
