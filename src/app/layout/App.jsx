import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventForm from "../../features/event/eventForm/eventForm";
import peopleDashboard from "../../features/user/peopleDashboard/peopleDashboard";
import userDetailPage from "../../features/user/userDetails/userDetailPage";
import settingsDashboard from "../../features/user/settings/settingsDashboard";
import EventDashboard from "../../features/event/eventDashoard/eventDashboard";
import eventDetailPage from "../../features/event/eventDetail/eventDetailPage";
import NavBar from "../../features/nav/navBar/NavBar";
import homePage from "../../features/home/homePage";
import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={homePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/test" component={TestComponent} />

                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={eventDetailPage} />
                  <Route path="/people" component={peopleDashboard} />
                  <Route path="/profile/:id" component={userDetailPage} />
                  <Route path="/settings" component={settingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
