import React from 'react'
import ReactQuill from 'react-quill'

/*
 * The Form used to enter the post content and save it to the database.
 */
class PostForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = { text: '' }
  }

  onTextChange (value) {
   this.setState({ text: value })
  }

  createPost (event) {
    event.preventDefault()
    var _this = this
    //SubmitForm data to create a post
    $.ajax({
        url: this.props.actionUrl,
        type: 'POST',
        dataType: 'json',
        data: $('#new_post').serialize(),
        success: function (returndata) {
          _this.setState({ text: "" })
        },
        error: function(){
          alert("Erro ao criar postagem")
        }
    });
  }

  render () {
    return (
      <div className="chat-form chat-form-custom">
        <div className="col-xs-2 inner">
          <div dangerouslySetInnerHTML={{__html: this.props.profileImage}} />
        </div>
        <div className="col-xs-10">
          <form noValidate="novalidate" className="simple_form new_post" id="new_post" action={this.props.actionUrl} acceptCharset="UTF-8" method="post">
            <input name="utf8" type="hidden" value="✓" />
            <input type="hidden" name="authenticity_token" value={this.props.authenticityToken} />
            <input type="hidden" name="post[content]" value={this.state.text} />

            <ReactQuill toolbar={false} ref={(c) => this._input = c} value={this.state.text} onChange={this.onTextChange.bind(this)} theme="snow" />

            <div className="text-right m-b m-t">
              <input type="submit" name="commit" value="Postar" onClick={this.createPost.bind(this)} className="btn btn btn-sm btn-primary m-t-n-xs" data-disable-with="Postar" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = PostForm
