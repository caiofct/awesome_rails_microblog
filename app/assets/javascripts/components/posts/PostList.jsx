import React from 'react'
import PostItem from './PostItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
      posts_array: [],
      followeds: []
    }
  }

  setPostsArray (posts) {
    this.setState({ posts_array: JSON.parse(posts) })
  }

  setFollowedsArray(followeds) {
    let lfolloweds = []
    JSON.parse(followeds).map(function(followed) {
      lfolloweds.push(JSON.parse(followed).id)
    })
    this.setState({ followeds: lfolloweds })
  }

  addNewPost (post) {
    let new_post = JSON.parse(post)
    if (this.state.followeds.find(x => x == new_post.user.id) != undefined) {
      let current_array = this.state.posts_array
      current_array.unshift(new_post)
      this.setState({ posts_array: current_array })

      if (window.pageYOffset > 0) {
        $("#more-posts-btn").removeClass("hidden");
      }
    }
  }

  componentDidMount () {
    this.setFollowedsArray(this.props.followed_users)
    this.setPostsArray(this.props.posts)
    this.setupSubscription()
  }

  setupSubscription() {
    App.cable.subscriptions.create("PostsChannel", {
      connected() {
        // console.log('Connected!')
      },

      received(data) {
        this.addNewPost(data.post);
      },

      addNewPost: this.addNewPost.bind(this)
    })
  }

  onMorePostsClick(event) {
    //go to the top of the page to see new posts
    window.scrollTo(0, 0)
    $(event.target).addClass("hidden")
  }

  renderPosts () {
    var items = this.state.posts_array.map(function(post_item) {
      var parsed_item = post_item
      if (typeof(post_item) != 'object') {
        parsed_item = JSON.parse(post_item)
      }
      return (<PostItem key={parsed_item.id} post={parsed_item} />)
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
        <div id="more-posts-btn" className="btn btn-info more-posts hidden" onClick={this.onMorePostsClick}>
          Novas Postagens
        </div>
        <div className="ibox-content posts">
          <div className="chat-activity-list posts">
            { this.renderPosts() }
          </div>
        </div>
      </div>
    )
  }
}

module.exports = PostList
