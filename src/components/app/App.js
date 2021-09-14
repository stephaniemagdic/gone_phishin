import React from 'react';
import { ShowContextProvider } from '../../contexts/ShowContext';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import YearsContainer from '../years_container/YearsContainer';
import Footer from '../footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

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
          path="gone-phishin/years/:year"
          render={({ match }) => {
            return <div className="app"></div>;
          }}
        />
        <Route
          exact
          path="gone-phishin/shows/:id"
          render={({ match }) => {
            return <div className="app"></div>;
          }}
        />
        <Route render={() => <p>Error. Page Not Found!</p>} />
      </Switch>
      <Footer />
    </ShowContextProvider>
  );
}

export default App;
