import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import Home from './components/Home'
import { useDispatch } from 'react-redux'
import * as sessionActions from "./store/session";



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
        <Route exact="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;