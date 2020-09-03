import React, {useEffect} from "react";
import PostsList from "../../components/post-list/PostsList";
import {Container} from 'react-bootstrap';
import {currentPosts} from "../../selectors/postsSelector";
import {getPostsActionCreator} from "../../redux/actionCreators/postsActionCreators";
import {connect} from "react-redux";
import PaginationControl from "../../components/pagination/PaginationControl";
import CustomSpinner from "../../components/custom-spinner/CustomSpinner";
import Empty from "../../components/empty-data/Empty";


const HomePage = ({currentPosts, loading, getPosts}) => {

    useEffect(() => {
        getPosts()
    }, [getPosts]);

    if(loading){
        return <CustomSpinner/>
    }
    if(!currentPosts.length){
        return <Empty/>
    }

    return (
        <Container className='d-flex flex-wrap '>
            <div className='container'>
                <PostsList posts={currentPosts}/>
                <PaginationControl/>
            </div>
        </Container>
    );
};
const mapStateToProps = (state) => ({
    // currentPosts: [],
    currentPosts: currentPosts(state),
    loading: state.postReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPostsActionCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);