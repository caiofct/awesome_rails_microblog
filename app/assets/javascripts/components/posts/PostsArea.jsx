import React from 'react'

/*
 * A posts area contained of a form and a list of posts.
 */
class PostsArea extends React.Component {

  constructor (props) {
    super(props)
    this.state = this.initialState()
  }

  initialState () {
    return {
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="col-lg-3 m-b">
      </div>
    )
  }
}

module.exports = PostsArea
