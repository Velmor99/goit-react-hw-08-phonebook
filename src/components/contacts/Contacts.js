import React, {Component} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';

class Contacts extends Component {
    
    componentDidMount() {
        this.props.onGetContacts()
    }

    render() {
        return(
            <>
                <ContactForm />
                    <Filter />
                <ContactList />
            </>
        )
    }
};



const mapDispatchToProps = {
    onGetContacts: contactsOperations.getContact,
};

export default connect(null, mapDispatchToProps)(Contacts)