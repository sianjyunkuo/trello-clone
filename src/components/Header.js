import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  left: 0;
  right: 0;
  background-color: rgb(2, 106, 167);
  bottom: 0;
  display: flex;
  flex-direction: row;
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin: 0px;
  padding: 0px;
  left: 0;
  right: 0;
  flex-wrap: no-wrap;
  height: 38px;
  justify-content: space-around;
`;

const NavBarLeftContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
`;

const NavBarRightContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
`;

const NavLiContainer = styled.li`
  display: flex;
  align-content: space-around;
  float: right;
  padding: 8px;
  margin: 0px;
  padding: 0px;
  left: 0;
  right: 0;
`;

export default class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 mb-3 border-bottom">
            <h5 className="my-0 mr-md-auto font-weight-normal">MyApp</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link to="/" className="p-2 text-dark">
                Home
              </Link>
              <Link to="/posts" className="p-2 text-dark">
                Posts
              </Link>
              <Link to="/profile" className="p-2 text-dark">
                Profile
              </Link>
            </nav>
          </div>
        </header>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/:id" component={PostItem} exact />
        <Route path="/profile" component={Profile} exact />
        <HeaderContainer>
          <header id="header">
            <div className="container">
              <NavContainer>
                <ul className="nav">
                  <NavBarLeftContainer>
                    <NavLiContainer>Home</NavLiContainer>
                    <NavLiContainer>Boards</NavLiContainer>
                    <NavLiContainer>Search</NavLiContainer>
                  </NavBarLeftContainer>
                  <NavBarRightContainer>
                    <NavLiContainer>Add</NavLiContainer>
                    <NavLiContainer>Notification</NavLiContainer>
                  </NavBarRightContainer>
                </ul>
              </NavContainer>
            </div>
          </header>
        </HeaderContainer>
      </BrowserRouter>
    );
  }
}
