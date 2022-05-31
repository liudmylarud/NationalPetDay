import React, {useEffect} from "react";
import {Navbar, Nav, NavDropdown, Form} from 'react-bootstrap';
import {getUser} from "../../helpers/common";
import UserInfo from "../user-info/UserInfo";
import Input from "../input/Input";
import {searchPost} from "../../redux/actionCreators/searchActionCreator";
import {connect} from 'react-redux';
import './navmenuStyles.css';
import logo from '../../images/logo.png'
import {NavLink} from "react-router-dom";
import {selectUserPosts} from "../../selectors/postsSelector";
import {getPostsActionCreator} from "../../redux/actionCreators/postsActionCreators";

const NavMenu = ({searched, getSearchPost, countPost, getPosts}) => {

    useEffect(() => {
        getPosts()
    }, [getPosts]);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand as={NavLink} exact to="/">
                <div className='d-flex align-items-center'>
                    <div id='Name' className='d-flex align-items-center'>National Pet Day</div>
                    <div>
                        <img src={logo} alt='logo' height='100px' />
                    </div>
                </div>

            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <div className='container'>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} exact to="/">We read</Nav.Link>
                    <NavDropdown title="We share" id="collasible-nav-dropdown1">
                        <NavDropdown.Item as={NavLink} to="/my-page">My Page</NavDropdown.Item>
                        <NavDropdown.Item href="/create-post">Share Post</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/gallery">We help</Nav.Link>
                    <Form id="searchBar" className='pl-5'>
                        <Input
                            type="search"
                            value={searched}
                            onChange={(e) => getSearchPost(e.target.value)}
                            placeholder="search posts ..."
                        />
                    </Form>
                    <Nav.Link id="AbountName" as={NavLink} to="/about">About Us</Nav.Link>
                </Nav>
                <Nav>
                    {
                        getUser() ? <Nav.Link as={NavLink} to="/my-page"> <UserInfo countPost={countPost}/></Nav.Link> :
                            <NavDropdown title="Login/Register" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/register">Register</NavDropdown.Item>
                            </NavDropdown>
                    }
                </Nav>
                </div>
            </Navbar.Collapse>


        </Navbar>
    );
};

const mapStateToProps = (state) => {
    return {
        searched: state.searchReducer.search,
        countPost: selectUserPosts(state).length
    }
};

const mapDispatchToProps = (dispatch) => ({
    getSearchPost: (data) => dispatch(searchPost(data)),
    getPosts: () => dispatch(getPostsActionCreator()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);


