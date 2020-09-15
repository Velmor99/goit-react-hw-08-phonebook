import React, {Component} from 'react';
import {connect} from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import style from './register.module.css'

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
       e.preventDefault()

       this.props.onRegister({...this.state})

       this.setState({
           name: '', email: '', password: ''
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className={style.form}>
                <label className={style.label}>
                    Name
                    <br />
                    <input value={this.state.name} className={style.input} type="text" name="name" onChange={this.handleChange}></input>
                </label>
                <label className={style.label}>
                    Email
                    <br />
                    <input value={this.state.email} className={style.input} type="email" name="email" onChange={this.handleChange}></input>
                </label>
                <label className={style.label}>
                    Password
                    <br />
                    <input value={this.state.password} className={style.input} type="password" autoComplete="cc-csc" name="password" onChange={this.handleChange}></input>
                </label>
                <button className={style.button} type="submit">Register</button>
            </form>
        )
    }
};


export default connect(null, {onRegister: authOperations.register})(Register)