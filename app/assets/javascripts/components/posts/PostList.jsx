import React from 'react'
var createFragment = require('react-addons-create-fragment')
import PostItem from './PostItem'

// var createFragment = require('react-addons-create-fragment')

// var POSTS = [
//   {timeAgoInWords: 'aproximadamente 1 hora', content: '<b>Teste</b> Testando 1', user: { profileImage: '<a id="user_avatar_link" href="/user/caiofct"><img alt="profile" class="profile-image img-circle circle-border m-b-md" style="width: 100px; height: 100px; float: none !important;" src="/uploads/user/avatar/1/thumb_perfil_2016.jpg"></a>', name: "Caio Teixeira", username: "caiofct" }},
//   {timeAgoInWords: 'aproximadamente 2 horas', content: '<b>Teste</b> Testando 2', user: { profileImage: '<a id="user_avatar_link" href="/user/caiofct"><img alt="profile" class="profile-image img-circle circle-border m-b-md" style="width: 100px; height: 100px; float: none !important;" src="/uploads/user/avatar/1/thumb_perfil_2016.jpg"></a>', name: "Caio Teixeira", username: "caiofct" }},
//   {timeAgoInWords: 'aproximadamente 2 horas', content: '<b>Teste</b> Testando 3', user: { profileImage: '<a id="user_avatar_link" href="/user/caiofct"><img alt="profile" class="profile-image img-circle circle-border m-b-md" style="width: 100px; height: 100px; float: none !important;" src="/uploads/user/avatar/1/thumb_perfil_2016.jpg"></a>', name: "Caio Teixeira", username: "caiofct" }},
//   {timeAgoInWords: 'há 1 dia', content: '<b>Teste</b> Testando 4', user: { profileImage: '<a id="user_avatar_link" href="/user/caiofct"><img alt="profile" class="profile-image img-circle circle-border m-b-md" style="width: 100px; height: 100px; float: none !important;" src="/uploads/user/avatar/1/thumb_perfil_2016.jpg"></a>', name: "Caio Teixeira", username: "caiofct" }},
//   {timeAgoInWords: 'há 2 dias', content: '<b>Teste</b> Testando 5', user: { profileImage: '<a id="user_avatar_link" href="/user/caiofct"><img alt="profile" class="profile-image img-circle circle-border m-b-md" style="width: 100px; height: 100px; float: none !important;" src="/uploads/user/avatar/1/thumb_perfil_2016.jpg"></a>', name: "Caio Teixeira", username: "caiofct" }}
// ];

/*
 * The list of posts in a user timeline
 */
class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.posts_array = JSON.parse(props.posts)
  }

  renderPosts () {
    var items = []
    this.posts_array.forEach(function(post) {
      items.push(<PostItem post={post} />)
    });

    if (items.length == 0) {
      return (
        <div className="text-center empty">
          <h1>Você ainda não fez nenhuma Postagem :(</h1>
        </div>
      )
    } else {
      // return (
        createFragment(items)
      // )
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
