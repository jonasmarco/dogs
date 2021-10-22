import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import LoginForm from '../Pages/LoginForm'
import LoginCreate from '../Pages/LoginCreate'
import LoginPasswordLost from '../Pages/LoginPasswordLost'
import LoginPasswordReset from '../Pages/LoginPasswordReset'
import {UserContext} from '../../Contexts/UserContext'
import styles from '../../Styles/Login.module.css';
import NotFound from './NotFound';

function Login() {
    const {logged} = React.useContext(UserContext);

    if (logged === true) return <Navigate to='/conta' />;

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="criar" element={<LoginCreate/>}/>
                    <Route path="perdeu" element={<LoginPasswordLost/>}/>
                    <Route path="resetar" element={<LoginPasswordReset/>}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </section>
    )
}

export default Login