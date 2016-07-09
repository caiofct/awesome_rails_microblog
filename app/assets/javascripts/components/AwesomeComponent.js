import React from 'react';
import Select from 'react-select';

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  logChange(val) {
    console.log("Selected: " + val);
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>

        <Select
            name="form-field-name"
            value="one"
            options={options}
            onChange={this.logChange} />
      </div>
    );
  }

}

module.exports = AwesomeComponent;
