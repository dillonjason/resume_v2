import * as React from 'react'

import { Input } from '../input'

import * as styles from './styles.scss'

interface IState {
  name: string
  email: string
  message: string
  response: string
  canCloseResponse: boolean
}

interface ISetValue {
  value: string
}

export class Form extends React.Component<{}, IState> {
  private formRef = React.createRef<HTMLFormElement>()

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      response: '',
      canCloseResponse: false
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.closeResponse = this.closeResponse.bind(this)
  }

  async onSubmit() {
    this.setState({
      response: 'One sec, sending your message...',
      canCloseResponse: false
    })
    const response = await fetch('/send_message', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })

    if (response.ok) {
      this.formRef.current.reset()
      this.setState({
        response: await response.text(),
        canCloseResponse: true,
        name: '',
        email: '',
        message: ''
      })
    } else {
      this.setState({
        response:
          'Oh no! Looks like something went wrong. Try using the email link below instead.',
        canCloseResponse: true
      })
    }
  }

  setName(params: ISetValue) {
    this.setState({ name: params.value })
  }

  setEmail(params: ISetValue) {
    this.setState({ email: params.value })
  }

  setMessage(params: ISetValue) {
    this.setState({ message: params.value })
  }

  closeResponse() {
    this.setState({
      response: '',
      canCloseResponse: false
    })
  }

  render() {
    const showResponse = Boolean(this.state.response)
    return (
      <div className={styles.container}>
        <form onSubmit={() => false} ref={this.formRef}>
          <h2>Feel Free to Reach Out</h2>
          <Input id='name' label='Name' onChange={this.setName} />
          <Input id='email' label='Email' onChange={this.setEmail} />
          <Input
            id='message'
            label='Message'
            className={styles.message}
            onChange={this.setMessage}
            textArea
          />
          <button
            type='button'
            className={styles.button}
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
        <div className={`${styles.response} ${showResponse && styles.show}`}>
          <h2>{this.state.response}</h2>
          {this.state.canCloseResponse && (
            <button
              type='button'
              className={styles.button}
              onClick={this.closeResponse}
            >
              OK
            </button>
          )}
        </div>
      </div>
    )
  }
}
