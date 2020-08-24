import React, {useEffect, useState} from "react";
import {Pagination} from "react-bootstrap";
import {currentPage, currentPosts} from "../../selectors/postsSelector";
import {setActivePage} from "../../redux/actionCreators/postsActionCreators";
import {selectPosts, selectUserPosts} from "../../selectors/postsSelector";
import {connect} from 'react-redux';

const PaginationControl = ({totalPosts, setCurrentPage, currentPage}) => {

    const [pageItems, setPageItems] = useState([]);

    useEffect(() => {
        let items = [];

        for (let number = 1; number <= Math.ceil(totalPosts /5) ; number++) {
            items.push(
                <div key={number} onClick={() => setCurrentPage(number)}>
                    <Pagination.Item active={number === currentPage + 1}>
                        {number}
                    </Pagination.Item>
                </div>
            );
        }
        setPageItems(items);
    }, [currentPage, totalPosts]);

    return (
        <>
            <Pagination size="sm">{pageItems}</Pagination>
        </>
    );
};

const mapStateToProps = (state, {isUserPosts}) => {
    console.log('isUserPosts', isUserPosts);
    return {
    totalPosts: isUserPosts ? selectUserPosts(state).length: selectPosts(state).length,
    currentPage: currentPage(state),
    currentPosts: currentPosts(state),
}};

const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (page) => dispatch(setActivePage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationControl);
