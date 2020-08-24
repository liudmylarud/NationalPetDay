import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {deletePostActionCreator, getPostsActionCreator} from "../../redux/actionCreators/postsActionCreators";
import {selectCurrentUserPosts} from "../../selectors/postsSelector";
import PostsList from "../../components/post-list/PostsList";
import HeaderUser from "./components/HeaderUser";
import PaginationControl from "../../components/pagination/PaginationControl";

const UserPage = ({getUserPosts, posts, deletePost}) => {
    useEffect(() => {
        getUserPosts()
    }, []);

    const handleDeletePost = (id) => {
        deletePost(id);
    };

    return (
        <div>
            <HeaderUser/>
            <PostsList posts={posts} deletePost={handleDeletePost} />
            <PaginationControl isUserPosts={true}/>
        </div>
    );
};
const mapStateToProps = (state) => ({
    posts: selectCurrentUserPosts(state)
});

const mapDispatchToProps = (dispatch) => ({
    getUserPosts: () => dispatch(getPostsActionCreator()),
    deletePost: (id) => dispatch(deletePostActionCreator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);