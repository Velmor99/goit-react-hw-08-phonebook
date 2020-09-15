import React, { Component } from 'react';
import style from './styleContactForm.module.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsOperations from '../../../redux/contacts/contactsOperations';

class ContactForm extends Component {
	state = {
		name: '',
		number: ''
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	preventSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<CSSTransition in={true} appear={true} classNames={style} timeout={700} unmountOnExit>
				<form className={style.form} onSubmit={this.preventSubmit}>
					<label className={style.label}>
						Name
						<br />
						<input className={style.input} name="name" type="text" onChange={this.handleChange} />
					</label>
					<label className={style.label}>
						Number
						<br />
						<input className={style.input} name="number" type="text" onChange={this.handleChange} />
					</label>
					<button
						className={style.button}
						name="name"
						onClick={() => this.props.clickEvent(this.state.name, this.state.number)}
						type="submit"
					>
						Add to contacts
					</button>
				</form>
			</CSSTransition>
		);
	}
}

const mapDispatchToProps = {
	clickEvent: contactsOperations.addContact
};

export default connect(null, mapDispatchToProps)(ContactForm);

