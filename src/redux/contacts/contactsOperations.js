import contactsActions from './contactsActions';
import axios from 'axios';

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

const addContact = (name, number) => (dispatch, getState) => {
    const {
        auth: {token: localToken},
    } = getState();


    if(!localToken) {
        return
    }

    token.set(localToken);
  dispatch(contactsActions.addContactsRequest());

//   if(name === "" || number === "") {
//    dispatch(contactsActions.addContactsError())
//    dispatch(contactsActions.showNotifyTrue(true))
//   }else {
    axios.post("/contacts", {name, number})
    .then(response => {
      token.set(response.data.token)
      dispatch(contactsActions.addContactsSuccess(response.data));
    })
    .catch(error => dispatch(contactsActions.addContactsError(error)))
//   }
  
};

const getContact = () => (dispatch, getState) => {
    const {
        auth: {token: localToken},
    } = getState();


    if(!localToken) {
        return
    }

    token.set(localToken);
    dispatch(contactsActions.getContactsRequest())


    axios.get("/contacts")
    .then(response => {
        dispatch(contactsActions.getContactsSuccess(response.data))
    })
    .catch(error => dispatch(contactsActions.getContactsError(error)))
}

const removeContact = id => (dispatch, getState) => {
    const {
        auth: {token: localToken},
    } = getState();


    if(!localToken) {
        return
    }

    token.set(localToken);
    dispatch(contactsActions.removeContactsRequest());

    axios.delete(`/contacts/${id}`)
    .then(() => {
        dispatch(contactsActions.removeContactsSuccess(id))
    })
    .catch(error => dispatch(contactsActions.removeContactsError(error)))
}


export default {
    addContact,
    getContact,
    removeContact,
}