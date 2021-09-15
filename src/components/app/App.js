import React, { useEffect } from 'react';
import { ShowContextProvider } from '../../contexts/ShowContext';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import YearsContainer from '../years_container/YearsContainer';
import TracksContainer from '../tracksContainer/TracksContainer';
import Footer from '../footer/Footer';
import { ShowContext } from '../../contexts/ShowContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../container/Container';

function App() {
  //To Do
  // How we can error handle using:
  // 👇 https://fkhadra.github.io/react-toastify/introduction/

  // const { error } = ShowContext;
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }
  // }, [error]);

  return (
    <ShowContextProvider>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="years-view">
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
                <Container id={match.params.year} type="shows" />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/shows/:id"
          render={({ match }) => {
            console.log({ match }, 'show');
            return (
              <div className="app">
                <TracksContainer id={match.params.id} />
              </div>
            );
          }}
        />
        <Route render={() => <p>Error. Page Not Found!</p>} />
      </Switch>
      <Footer />
    </ShowContextProvider>
  );
}

export default App;
