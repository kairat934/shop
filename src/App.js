import React, {useEffect} from 'react';
import {Route,Switch} from "react-router-dom";
import Frontend from './containers/Frontend/Frontend';
import Dashboard from "./containers/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import {useDispatch , useSelector} from "react-redux";

import 'semantic-ui-css/semantic.min.css'
import { authCheck } from './store/actions/authAction';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => (state.auth.isAuth));
  

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Frontend} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} isAuth={isAuth}/>
      </Switch>
    </div>
  );
}

export default App;
