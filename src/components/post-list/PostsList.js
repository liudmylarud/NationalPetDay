import React from 'react';
import PostListItem from '../post-list-item/PostListItem';

const PostsList = ({posts}) => {

    return (
        <>
            <PostListItem posts={posts}/>
        </>
    );
};

export default PostsList;

