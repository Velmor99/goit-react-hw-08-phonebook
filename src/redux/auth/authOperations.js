import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());

    axios
    .post('/users/signup', credentials)
    .then(response => {
        token.set(response.data.token);
        dispatch(authActions.registerSuccess(response.data.user))
    })
    .catch(error => dispatch(authActions.registerError(error.message)))
}

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());

    axios.post('/users/login', credentials)
    .then(response => {
        token.set(response.data.token)
        dispatch(authActions.loginSuccess(response.data))
    })
    .catch(error => dispatch(authActions.loginError(error.message)))
};

const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest())

    axios.post('/users/logout')
    .then(() => {
        token.unset();
        dispatch(authActions.logoutSuccess())
    })
    .catch(error => dispatch(authActions.logoutError(error.message)))
}

const getCurrentUser = () => (dispatch, getState) => {
    const {
        auth: {token: localToken},
    } = getState();


    if(!localToken) {
        return
    }

    token.set(localToken);
    dispatch(authActions.getCurrentUserRequest())

    axios
    .get('/users/current')
    .then(({data}) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => authActions.getCurrentUserError(error.message))
}

export default {
    register,
    logIn,
    logOut,
    getCurrentUser,
}
