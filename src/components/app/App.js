import React, { useContext } from 'react';
import { ShowContextProvider } from '../../contexts/ShowContext';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import YearsContainer from '../years_container/YearsContainer';
import TracksContainer from '../tracksContainer/TracksContainer';
import Footer from '../footer/Footer';
import './App.css';
import { ShowContext } from '../../contexts/ShowContext';
import ShowsContainer from '../shows_container/ShowsContainer';
import {
  // ThemeContext,
  ThemeContextProvider,
} from '../../contexts/ThemeContext';

const App = () => {
  const { error } = useContext(ShowContext);

  return (
    <ThemeContextProvider>
      <ShowContextProvider>
        <div className="app-wrapper">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div className="app">
                    <YearsContainer />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/years/:year"
              render={({ match }) => {
                return (
                  <div className="app">
                    <ShowsContainer year={match.params.year} />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/shows/:id"
              render={({ match }) => {
                return (
                  <div className="app">
                    <TracksContainer id={match.params.id} type="tracks" />
                  </div>
                );
              }}
            />
            <Route render={() => <p>Error. Page Not Found!</p>} />
          </Switch>
          <Footer />
        </div>
      </ShowContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
