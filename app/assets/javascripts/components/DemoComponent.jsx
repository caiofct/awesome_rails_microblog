import React from 'react'
import Select from 'react-select'

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
]

class DemoComponent extends React.Component {

  constructor (props) {
    super(props)
    this.state = {likesCount: 0, selectValue: ''}
    this.onLike = this.onLike.bind(this)
    this.changeSelectValue = this.changeSelectValue.bind(this)
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1
    this.setState({likesCount: newLikesCount})
  }

  changeSelectValue (value) {
    this.setState({selectValue: value})
  }

  render () {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
        <br /><br />
        <Select
          name="form-field-name"
          options={options}
          value={this.state.selectValue}
          onChange={this.changeSelectValue} />
      </div>
    )
  }

}

module.exports = DemoComponent
