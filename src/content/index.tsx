import * as React from 'react'
import * as styles from './styles.scss'
import { connect } from '../store/provider'
import { State } from '../store/state'
import { setPage, Action } from '../store/actions'

interface Props {
  page: string
}

interface DispatchProps {
  setPage(page: string): void
}

export const createContent = (): React.FC<Props & DispatchProps> => ({
  page,
  setPage
}) => (
  <div className={styles.container}>
    <button onClick={() => setPage('other_page')}>navigate</button>
    <p>{page}</p>
  </div>
)

const mapStateToProps = ({ page }: State) => ({
  page
})

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
  setPage: (page: string) => dispatch(setPage(page))
})

export const Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(createContent())
