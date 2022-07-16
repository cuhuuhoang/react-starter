import React, {useEffect} from "react";
import {fetchPostsAndUser} from "../actions";
import {connect} from "react-redux";
import UserHeader from "./UserHeader";

const PostList = ({posts, doFetch}) => {
  useEffect(() => {
    doFetch();
  }, []);

  const renderedList = posts.map(post => {
    return (
      <div key={post.id}>
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <UserHeader userId={post.userId} />
        </div>
        <hr />
      </div>
    )
  });

  return (
    <div>{renderedList}</div>
  );
}

const mapStateToProps = state => {
  return {posts: state.posts};
}

export default connect(mapStateToProps, {doFetch: fetchPostsAndUser})(PostList)