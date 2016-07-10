import React from 'react'

class ProfileBox extends React.Component {

  constructor (props) {
    super(props)
    this.state = this.initialState()
  }

  initialState () {
    return {
      profileImage: '',
      postsCount: 0,
      followingCount: 0,
      followedCount: 0
    }
  }

  componentDidMount () {
    this.setProfileImage(this.props.profileImage)
    this.setPostsCount(this.props.postsCount)
    this.setFollowingsCount(this.props.followingsCount)
    this.setFollowedsCount(this.props.followedsCount)
  }

  setProfileImage (profileImage) {
    this.setState({profileImage: profileImage})
  }

  setPostsCount (postsCount) {
    this.setState({postsCount: postsCount})
  }

  setFollowingsCount (followingsCount) {
    this.setState({followingsCount: followingsCount})
  }

  setFollowedsCount (followedsCount) {
    this.setState({followedsCount: followedsCount})
  }

  render () {
    return (
      <div className="col-lg-3 m-b">
        <div className="widget-head-color-box navy-bg p-lg text-center">
          <div dangerouslySetInnerHTML={{__html: this.state.profileImage}} />
          <div className="m-b-md">
            <h2 className="font-bold no-margins">{this.props.userName}</h2>
            <small>@{this.props.username}</small>
          </div>
          <div className="row">
            <div className="col-xs-4">Postagens</div>
            <div className="col-xs-4">Seguindo</div>
            <div className="col-xs-4">Seguidores</div>
          </div>
          <div className="row">
            <div className="col-xs-4">{this.state.postsCount}</div>
            <div className="col-xs-4">{this.state.followingsCount}</div>
            <div className="col-xs-4">{this.state.followedsCount}</div>
          </div>
        </div>
      </div>
    )
  }

}

module.exports = ProfileBox
