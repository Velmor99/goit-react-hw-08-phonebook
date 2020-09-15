import React from 'react';
import {NavLink} from 'react-router-dom';
import UserMenu from '../userMenu/UserMenu';
import {connect} from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import style from './navBar.module.css';

const stylesForNavLink = {
    display: "block",
    height: "44px",
    textDecoration: "none",
    paddingRight: "20px",
    paddingLeft: "20px",
    color: "#41292C",
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: "Roboto, Verdana, sans-serif",
    lineHeight: "44px",
};

const activeStylesForNavLink = {
    backgroundColor: "#365B42",
    color: "#9381FF"
}

const NavBar = ({isAuthenteficated}) => {
   return (
       <nav className={style.nav}>
           {isAuthenteficated ? (
               <UserMenu></UserMenu>
           ) : (
               <>
               <NavLink to="/" exact style={stylesForNavLink} activeStyle={activeStylesForNavLink}>
                   Register
               </NavLink>
               <NavLink to="/login" exact style={stylesForNavLink} activeStyle={activeStylesForNavLink}>
                   Login
               </NavLink>
               </>
           )}
       </nav>
      
   )
}

const mapStateToProps = state => ({
    isAuthenteficated: authSelectors.isAuthentificated(state)
})

export default connect(mapStateToProps, null)(NavBar)