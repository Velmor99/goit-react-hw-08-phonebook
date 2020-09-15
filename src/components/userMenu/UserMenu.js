import React from 'react';
import {connect} from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import style from './userMenu.module.css'

const UserMenu = ({currentName, onLogout}) => {
    return (
            <div className={style.menu}>
                <h2 className={style.menuTitle}>Welcome, {currentName}</h2>
                <div className={style.menuButton}><button type="button" onClick={onLogout} className={style.button}>Logout</button></div>
            </div>
    )
            
};

const mapStateToProps = state => ({
    currentName: authSelectors.getUserName(state)
})


export default connect(mapStateToProps, {onLogout: authOperations.logOut})(UserMenu)