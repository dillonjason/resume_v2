import * as React from 'react'

import { Input } from '../input'

import * as styles from './styles.scss'

export class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit() {}

  render() {
    return (
      <form className={styles.container} onSubmit={this.onSubmit}>
        <h2>Feel Free to Reach Out</h2>
        <Input id='name' label='Name' />
        <Input id='email' label='Email' />
        <Input
          id='message'
          label='Message'
          className={styles.message}
          textArea
        />
        <button className={styles.button}>Submit</button>
      </form>
    )
  }
}
