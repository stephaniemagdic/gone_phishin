import React, { useContext } from 'react';
import { ShowContextProvider, ShowContext } from '../../contexts/ShowContext';
import { ThemeContextProvider } from '../../contexts/ThemeContext';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import YearsContainer from '../years_container/YearsContainer';
import TracksContainer from '../tracksContainer/TracksContainer';
import ShowsContainer from '../shows_container/ShowsContainer';
import ErrorDisplay from '../error_display/ErrorDisplay';
import Footer from '../footer/Footer';
import './App.css';

const App = () => {
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
            <Route render={() => <ErrorDisplay message={'Page Not Found'} />} />
          </Switch>
          <Footer />
        </div>
      </ShowContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
