import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import Footer from './components/Footer'
import Spots from './components/Spots'
import SpotDetail from './components/SpotDetail'
import HostForm from './components/HostForm'
import EditHostForm from './components/EditHostForm'



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/spots">
          <Spots />
        </Route>
        <Route path="/spots/host">
          <HostForm />
        </Route>
        <Route path="/spots/:spotId">
          <SpotDetail />
        </Route>
        <Route path="/spots/:spotId/host">
          <EditHostForm />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;