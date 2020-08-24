import React, { useEffect } from 'react';
import get from "lodash/get";
import { connect } from 'react-redux';

import CustomSpinner from "../../components/custom-spinner/CustomSpinner";

import { selectPost } from "../../selectors/postsSelector";
import { getPostActionCreator } from "../../redux/actionCreators/postsActionCreators";

const PostDetail = ({ post, postId, getPost }) => {

  useEffect(() => {
    if (postId) {
      getPost(postId);
    }
  }, []);

  if (!post) {
    return (
      <div>
        <CustomSpinner />
      </div>
    )
  }

  return (
    <div>Post Detail
      <p>{post.title}</p>
      <p>{post.description}</p>
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  return {
    postId: get(match, ['params', 'id'], null),
    post: selectPost(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getPostActionCreator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);