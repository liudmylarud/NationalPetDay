import React from 'react';
import PostListItem from '../post-list-item/PostListItem';


const PostsList = ({posts}) => {

    console.log('posts', posts);

    return (
        <>
            <PostListItem posts={posts}/>
        </>
    );
};

export default PostsList;

