import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../menus/signedOutMenu";
import SignedInMenu from "../menus/signedInMenu";

class NavBar extends Component {
  state = {
    authenticate: false
  };

  handleSignin = () => {
    this.setState({
      authenticated: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
    //NavLink will ensure active link class
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/test" name="test" />

          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignin} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
