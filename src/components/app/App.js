import React from 'react';
import { ShowContextProvider } from '../../contexts/ShowContext';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';

function App() {
  return (
    <ShowContextProvider>
      <Switch>
        <Route
          exact
          path="gone-phishin/years"
          render={() => {
            <div className="app">
              <Navbar />
              <Container type="years" />
              <Footer />
            </div>;
          }}
        />
        <Route
          exact
          path="gone-phishin/years/:year"
          render={({ match }) => {
            return (
              <div className="app">
                <Navbar />
                <Container id={match.params.year} />
                <Footer />
              </div>
            );
          }}
        />
        <Route
          exact
          path="gone-phishin/shows/:id"
          render={({ match }) => {
            return (
              <div className="app">
                <Navbar />
                <Container id={match.params.id} />
                <Footer />
              </div>
            );
          }}
        />
      </Switch>
    </ShowContextProvider>
  );
}

export default App;
