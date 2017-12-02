import React from 'react'
import { Provider } from 'react-redux'
import App from './App'

const Root = (props) => {
  console.log(props)

  return <div>asdf</div>
}

export default Root

// export default class Root extends Component {
//   static propTypes = {
//     store: PropTypes.object.isRequired,
//   }

//   render() {
//     const { store } = this.props
//     return <Provider store={store} />
//   }
// }
