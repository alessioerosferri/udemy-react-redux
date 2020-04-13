import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        Post List
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);