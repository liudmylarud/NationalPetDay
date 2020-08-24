import React from 'react';
import {Link} from "react-router-dom";
import {Card, Container, Col, Row, Button} from 'react-bootstrap';

import CustomSpinner from "../custom-spinner/CustomSpinner";

const PostListItem = ({posts, deletePost}) => {

    if (!posts) return (
        <div>
            <CustomSpinner/>
        </div>
    );

    return (
        <>
            {
                posts.map(({id, title, description, user_name}) => {
                    return (

                        <Card
                            bg={'dark'}
                            key={id}
                            text={'white'}
                            className="d-block mr-auto ml-auto mb-2 mt-2"
                        >
                            <Card.Header>Author - {user_name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {description.length > 200 ? `${description.substring(0, 100)}...` : description}
                                </Card.Text>
                                <Container>
                                    <Col className='text-center'>
                                        <Link to={`/post-detail/${id}`}>
                                            <Button variant="dark">post detail...</Button>
                                        </Link>
                                    </Col>
                                    <Row>
                                        <Link to={`/edit-post/${id}`}>
                                            <Button variant="dark"> edit post</Button>
                                        </Link>
                                        <Button variant="dark" onClick={() => deletePost(id)}>Delete</Button>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>

                    );
                })
            }
        </>
    );
};

export default PostListItem;