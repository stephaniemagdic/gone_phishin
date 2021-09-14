import React from 'react';
import { ShowContextProvider } from '../../contexts/ShowContext';
import { Route, Switch } from 'react-router-dom';
// import Navbar from '../navbar/Navbar';
// import Container from '../container/Container';
import YearsContainer from '../years_container/YearsContainer';
// import Footer from '../footer/Footer';

function App() {
  return (
    <ShowContextProvider>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="app">
                {/* <Navbar /> */}
                <YearsContainer />
                {/* <Footer /> */}
              </div>
            );
          }}
        />
        <Route
          exact
          path="gone-phishin/years/:year"
          render={({ match }) => {
            return (
              <div className="app">
                {/* <Navbar /> */}
                {/* <Container path={`/year/${match.params.year}`} /> */}
                {/* <Footer /> */}
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
                {/* <Navbar /> */}
                {/* <Container id={`shows/${match.params.id}`} /> */}
                {/* <Footer /> */}
              </div>
            );
          }}
        />
        <Route render={() => <p>Error. Page Not Found!</p>} />
      </Switch>
    </ShowContextProvider>
  );
}

export default App;
