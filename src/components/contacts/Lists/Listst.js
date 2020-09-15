import React from 'react';
import styles from './lists.module.css';
import { connect } from 'react-redux';
import contactsOperations from '../../../redux/contacts/contactsOperations';
import contactSelector from '../../../redux/contacts/contactsSelectors';

const List = ({ id, name, number, click }) => {
	return (
		<li key={id} className={styles.list}>
			<p className={styles.text}>{name}: {number}</p>
			<button className={styles.delete} onClick={click} />
		</li>
	);
};

const mapStateToProps = (state, ownProps) => {
	const item = contactSelector.getItemById(state, ownProps.id)
	return {
		...item
	};
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	click: () => dispatch(contactsOperations.removeContact(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);