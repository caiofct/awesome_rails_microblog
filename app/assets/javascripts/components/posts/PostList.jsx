import React from 'react'
var createFragment = require('react-addons-create-fragment')
import PostItem from './PostItem'

/*
 * The list of posts in a user timeline
 */
class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.initialState();
  }

  initialState () {
    return {
      posts_array: []
    }
  }

  setPostsArray (posts) {
    this.setState({ posts_array: JSON.parse(posts) })
  }

  componentDidMount () {
    this.setPostsArray(this.props.posts)
  }

  renderPosts () {
    var items = this.state.posts_array.map(function(post_item) {
      var parsed_item = JSON.parse(post_item)
      return (<PostItem key={JSON.parse(parsed_item.id)} post={parsed_item} />)
    })

    if (items.length == 0) {
      return (
        <div className="text-center empty">
          <h1>Você ainda não fez nenhuma Postagem :(</h1>
        </div>
      )
    } else {
      return (
        items
      )
    }
  }

  render () {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-content">
          <div className="chat-activity-list posts">
            { this.renderPosts() }
          </div>
        </div>
      </div>
    )
  }
}

module.exports = PostList
