import {lazy} from 'react';

export default [
    {
        path: "/",
        label: "Register",
        exact: true,
        component: lazy(() => import("./components/register/Register")),
        private: false, 
        restricted: true
    },
    {
        path: "/login",
        label: "Login",
        exact: true,
        component: lazy(() => import("./components/login/login")),
        private: false, 
        restricted: true
    },
    {
        path: "/contacts",
        label: "Contacts",
        exact: true,
        component: lazy(() => import("./components/contacts/Contacts")),
        private: true, 
        restricted: false
    }
]