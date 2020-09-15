import React, {Component} from 'react';
import {connect} from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import style from './login.module.css'




class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
       e.preventDefault()

       this.props.onLogin({...this.state})

       this.setState({email: '', password: ''})
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit} className={style.form}>
                <label className={style.label}>
                    Email
                    <br />
                    <input className={style.input} type="email" value={this.state.email} name="email" onChange={this.handleChange}></input>
                </label>
                <label className={style.label}>
                    Password
                    <br />
                    <input className={style.input} type="password" autoComplete="cc-csc" value={this.state.password} name="password" onChange={this.handleChange}></input>
                </label>
                <button className={style.button} type="submit">Login</button>
            </form>
        )
    }
};


export default connect(null, {onLogin: authOperations.logIn})(Login)