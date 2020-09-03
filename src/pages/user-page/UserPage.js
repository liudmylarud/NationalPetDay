import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {deletePostActionCreator, getPostsActionCreator} from "../../redux/actionCreators/postsActionCreators";
import {selectCurrentUserPosts} from "../../selectors/postsSelector";
import PostsList from "../../components/post-list/PostsList";
import HeaderUser from "./components/HeaderUser";
import PaginationControl from "../../components/pagination/PaginationControl";
import CustomSpinner from "../../components/custom-spinner/CustomSpinner";
import ButtonU from "../../components/button/ButtonU";
import {Link} from "react-router-dom";
import Empty from "../../components/empty-data/Empty";

const UserPage = ({getUserPosts, userPosts, loading, deletePost}) => {


    useEffect(() => {
        getUserPosts()
    }, [getUserPosts]);

    if (loading) {
        return <CustomSpinner/>
    }
    if (!userPosts.length) {
        return (
            <div>
                <Empty/>
                <div className='text-center'>
                    <Link to={'/create-post'}>
                        <ButtonU type='button'
                                 clazz='pink'>
                            Add post
                        </ButtonU>
                    </Link>
                </div>
            </div>
        )
    }

    const handleDeletePost = (id) => {
        deletePost(id);
    };

    return (
        <div>
            <HeaderUser/>
            <PostsList posts={userPosts} deletePost={handleDeletePost}/>
            <PaginationControl isUserPosts={true}/>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        userPosts: selectCurrentUserPosts(state),
        loading: state.postReducer.loading
    }

};

const mapDispatchToProps = (dispatch) => ({
    getUserPosts: () => dispatch(getPostsActionCreator()),
    deletePost: (id) => dispatch(deletePostActionCreator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);