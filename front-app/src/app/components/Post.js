import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="Post alert alert-primary">
        {this.props.children}
      </div>
    )
  }
}

export default Post;
