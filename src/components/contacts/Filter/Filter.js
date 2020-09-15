import React from 'react';
import styles from './filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../../redux/contacts/contactsActions';
import contactSelector from '../../../redux/contacts/contactsSelectors';

function Filter({ value, onChangeFilter }) {
	return (
		<form className={styles.form}>
			<label className={styles.label}>
				Find contacts by name
				<br />
				<input
					className={styles.input}
					type="text"
					value={value}
					onChange={(e) => onChangeFilter(e.target.value)}
				/>
			</label>
		</form>
	);
}

const mapDispatchToProps = {
	onChangeFilter: contactsActions.changeFilter
};
const mapStateToProps = (state) => ({
	value: contactSelector.getFilter(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

