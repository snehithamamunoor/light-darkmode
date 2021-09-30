import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  getMode = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const modeClassName = isClicked ? 'dark-mode' : 'light-mode'
    const text = isClicked ? 'Light Mode' : 'Dark Mode'
    return (
      <div className={`bg-container ${modeClassName}`>
        <h1>Click To Change Mode</h1>
        <button type="button" onClick={this.getMode}>
          {text}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
