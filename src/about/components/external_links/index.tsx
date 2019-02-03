import * as React from 'react'

import { withData } from './query'
import * as styles from './styles.scss'

export const ExternalLinks = withData(
  ({ data: { loading, error, abouts } }) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error :(</div>

    return (
      <ul className={styles.container}>
        <li>
          <a target='_blank' href={abouts[0].resume}>
            Resume
          </a>
        </li>
        <li>
          <a target='_blank' href={abouts[0].gitHub}>
            GitHub
          </a>
        </li>
        <li>
          <a href={`mailto:${abouts[0].email}`}>Email</a>
        </li>
      </ul>
    )
  }
)
