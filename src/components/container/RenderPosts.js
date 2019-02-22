import React, { Component } from 'react';
import { getPosts } from '../../actions/posts';
import { connect } from 'react-redux';

class RenderPosts extends Component {


    
    componentWillMount() {
        this.props.getPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    
  render() {
    const postItems = this.props.posts.map(post => (
        <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.creator}</p>
        </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        { postItems } 
      </div>
    )
  }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});


export default connect(mapStateToProps, { getPosts })(RenderPosts);
