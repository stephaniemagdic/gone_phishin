import React, { useEffect, useContext } from 'react';
import { ShowContextProvider } from '../../contexts/ShowContext';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import YearsContainer from '../years_container/YearsContainer';
import TracksContainer from '../tracksContainer/TracksContainer';
import Footer from '../footer/Footer';
import { ShowContext } from '../../contexts/ShowContext';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowsContainer from '../shows_container/ShowsContainer';

const App = () => {
  // toast("Welcome To Gone Phishin'!!!");
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
        {/* {loading && <Loading />} */}
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="years-view">
                {/* <>
                  <ToastContainer transition={Bounce} />
                </> */}
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
    </ShowContextProvider>
  );
};

export default App;
