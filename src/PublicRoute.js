import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import authSelectors from './redux/auth/authSelectors';

const PublicRoute = ({component: Component, isAuthenteficated, restricted, ...routeProps}) => <Route {...routeProps} render={props => 
    isAuthenteficated && restricted ? <Redirect to="/contacts" /> : <Component {...props} /> }/>

const mapStateToProps = state => ({
    isAuthenteficated: authSelectors.isAuthentificated(state)
})

export default connect(mapStateToProps, null)(PublicRoute)