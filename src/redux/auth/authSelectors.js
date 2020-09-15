const isAuthentificated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const authSelectors = {
    isAuthentificated, 
    getUserName
}

export default  authSelectors 