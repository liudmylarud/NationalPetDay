import React, {useEffect} from "react";
import ImgCarousel from "../../components/carousel/ImgCarousel.js";
import PostsList from "../../components/post-list/PostsList";
import {Container} from 'react-bootstrap';
import {currentPosts, selectPosts} from "../../selectors/postsSelector";
import {deletePostActionCreator, getPostsActionCreator} from "../../redux/actionCreators/postsActionCreators";
import {connect} from "react-redux";
import PaginationControl from "../../components/pagination/PaginationControl";


const HomePage = ({currentPosts, getPosts}) => {

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Container className='d-flex flex-wrap '>
            {/*<ImgCarousel/>*/}
            <div className='container'>
                <PostsList posts={currentPosts}/>
                <PaginationControl/>
            </div>
        </Container>
    );
};
const mapStateToProps = (state) => ({
    currentPosts: currentPosts(state)
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPostsActionCreator()),
    deletePost: (id) => dispatch(deletePostActionCreator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);