import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'

import { withData } from './query'
import * as styles from './styles.scss'

export const Summary = withData(({ data: { loading, error, abouts } }) => {
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

  return (
    <div className={styles.container}>
      <img src={abouts[0].image.url} className={styles.image} />
      <ReactMarkdown source={abouts[0].summary} />
    </div>
  )
})
