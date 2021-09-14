import React from 'react';
import { ShowContextProvider } from '../../contexts/ShowContext';
import { Route, Switch } from 'react-router-dom';
// import Navbar from '../navbar/Navbar';
// import Container from '../container/Container';
// import Footer from '../footer/Footer';


function App() {
  return (
    <ShowContextProvider>
      <Switch>
        <Route
          exact
          path="gone-phishin/years"
          render={() => {
            <div className="app">
              {/* <Navbar /> */}
              <Container type="years" />
              {/* <Footer /> */}
            </div>;
          }}
        />
        <Route
          exact
          path="gone-phishin/years/:year"
          render={({ match }) => {
            return (
              <div className="app">
                {/* <Navbar /> */}
                <Container id={match.params.year} />
                {/* <Footer /> */}
              </div>
            );
          }}
        />
        {/* <Route
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
        /> */}
        {/* <Route render={() => <p>Error. Page Not Found!</p>} /> */}
      </Switch>
    </ShowContextProvider>
  );
}

export default App;
