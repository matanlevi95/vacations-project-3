import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from './components/Register';
import { AppRoutes } from './appRouter/appRouter';
import { routes } from "./appRouter/router.config"
import { connect } from 'react-redux';
import { init } from "./redux/actions"




class App extends React.Component<any, any> {

  componentDidMount() {
    this.props.actions.init()
  }

  render() {

    return (

      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <AppRoutes routes={routes} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      init: () => dispatch(init())
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
