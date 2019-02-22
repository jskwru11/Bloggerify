import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/posts';


class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body:'',
            creator:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onSubmit(event) {
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
            creator: this.state.creator
        }

        this.props.createPost(post);
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label id="postTitle">
                Title:
                </label>
                <input type="text" placeholder="tile" name="title" onChange={this.onChange} value={this.state.title}/>
            </div>
            <br />
            <div>
                <label id="postTitle">
                Body:
                </label>
                <textarea  name="body" placeholder="message" onChange={this.onChange} value={this.state.body}/>
            </div>
            <br />
            <div>
                <label id="postCreator">
                Creator:
                </label>
                <input type="text" name="creator" placeholder="creator" onChange={this.onChange} value={this.state.creator}/>
            </div>
            <br />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(PostForm)
