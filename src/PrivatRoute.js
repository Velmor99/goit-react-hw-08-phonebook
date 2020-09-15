import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import authSelectors from './redux/auth/authSelectors';

const PrivatRoute = ({
    component: Component, 
    isAuthenteficated, 
    ...routeProps
}) => (
<Route 
{...routeProps} 
render={props => 
     isAuthenteficated ? <Component {...props} /> : 
     <Redirect to="/login" />
  }
 />
)

const mapStateToProps = state => ({
    isAuthenteficated: authSelectors.isAuthentificated(state)
})

export default connect(mapStateToProps)(PrivatRoute)