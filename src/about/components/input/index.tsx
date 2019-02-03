import * as React from 'react'

import * as styles from './styles.scss'

interface onChangeParams {
  value: string
}

interface InputProps {
  onChange?(params: onChangeParams): void
  id: string
  label: string
  className?: string
  textArea?: boolean
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  textAreaProps?: React.InputHTMLAttributes<HTMLTextAreaElement>
}

interface InputState {
  value: string
  noInput: boolean
}

export class Input extends React.Component<InputProps, InputState> {
  static defaultProps = {
    onChange: () => {}
  }

  constructor(props: InputProps) {
    super(props)
    this.state = {
      value: '',
      noInput: true
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onTextAreaChange = this.onTextAreaChange.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.getLabelPositionClass = this.getLabelPositionClass.bind(this)
  }

  onInputChange(event: React.FormEvent<HTMLInputElement>): void {
    const value = event.currentTarget.value
    this.setState({ value })
    this.props.onChange({ value })
  }

  onTextAreaChange(event: React.FormEvent<HTMLTextAreaElement>): void {
    const value = event.currentTarget.value
    this.setState({ value })
    this.props.onChange({ value })
  }

  onFocus(): void {
    this.setState({ noInput: false })
  }

  onBlur(): void {
    this.setState({ noInput: !Boolean(this.state.value) })
  }

  getLabelPositionClass(): string {
    return this.state.noInput ? styles.noInput : null
  }

  setInputFocus(): void {}

  render() {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        <label className={this.getLabelPositionClass()} htmlFor={this.props.id}>
          {this.props.label}
        </label>
        {this.props.textArea ? (
          <textarea
            id={this.props.id}
            className={styles.input}
            name={this.props.id}
            onChange={this.onTextAreaChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            {...this.props.textAreaProps}
          />
        ) : (
          <input
            id={this.props.id}
            className={styles.input}
            name={this.props.id}
            onChange={this.onInputChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            {...this.props.inputProps}
          />
        )}
      </div>
    )
  }
}
