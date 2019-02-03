import * as React from 'react'

import { Input } from '../input'

import * as styles from './styles.scss'

export const Form = () => (
  <div className={styles.container}>
    <Input
      id='name'
      label='Name'
      textArea
      onChange={({ value }) => console.log(value)}
    />
  </div>
)
