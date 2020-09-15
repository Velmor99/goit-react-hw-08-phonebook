import React, {Component, Suspense} from 'react';
import {Switch} from 'react-router-dom';
import NavBar from './components/navBar/NavBar'
import {connect} from 'react-redux';
import authOperations from './redux/auth/authOperations';
import routes from './routes';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';



class App extends Component {
componentDidMount () {
  this.props.onGetCurrentUser();
}

  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map(route => {
            return route.private ? (<PrivatRoute key={route.path} {...route} />
              ) : (
             <PublicRoute key={route.path} {...route} restricted={route.restricted} />)
          })}
        </Switch>
        </Suspense>
        </>
    )
  }
}


export default connect(null, {onGetCurrentUser: authOperations.getCurrentUser})(App)