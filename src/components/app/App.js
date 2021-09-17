import React from 'react';
import { ShowContextProvider } from '../../contexts/ShowContext';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import YearsContainer from '../years_container/YearsContainer';
import TracksContainer from '../tracksContainer/TracksContainer';
import Footer from '../footer/Footer';
// import { ShowContext } from '../../contexts/ShowContext';
import 'react-toastify/dist/ReactToastify.css';
import ShowsContainer from '../shows_container/ShowsContainer';
import {
  // ThemeContext,
  ThemeContextProvider,
} from '../../contexts/ThemeContext';

const App = () => {
  //To Do
  // How we can error handle using:
  // 👇 https://fkhadra.github.io/react-toastify/introduction/

  // const { error } = ShowContext;
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }
  // }, [error]);

  // const { isPartyMode, partyMode, basic } = useContext(ThemeContext);
  // const themes = isPartyMode ? partyMode : basic;

  return (
    <ThemeContextProvider>
      <ShowContextProvider>
        {/* <div style={{ backgroundColor: themes.mainBG }}> */}
        <Navbar />
        <Switch>
          {/* {loading && <Loading />} */}
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
        {/* </div> */}
      </ShowContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
