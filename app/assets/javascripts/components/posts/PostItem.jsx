import React from 'react'

/*
 * Represents a post item that contains a profile image of the user, it's name
 * and username and the post content
 */
class PostItem extends React.Component {
  render () {
    return (
      <div className="chat-element post">
        <a className="pull-left" href="#">
          <div dangerouslySetInnerHTML={{__html: this.props.post.user.profileImage}} />
        </a>
        <div className="media-body">
          <small className="pull-right">{this.props.post.timeAgoInWords}</small>
          <strong className="name">{this.props.post.user.name}</strong> <span className="username">@{this.props.post.user.username}</span>
          <div className="outer-content">
            <div className="content m-b-xs m-t-xs">
              <div dangerouslySetInnerHTML={{__html: this.props.post.content}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = PostItem
