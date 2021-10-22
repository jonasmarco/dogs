import React from 'react'
import {TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET} from '../api';
import {useNavigate} from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [logged, setLogged] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const userLogout = React.useCallback(async function () {
            setData(null);
            setError(null);
            setLoading(false);
            setLogged(false);
            window.localStorage.removeItem('token');
            navigate('/login');
        },
        [navigate]
    );

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const user = await response.json();

        setData(user);
        setLogged(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);

            const {url, options} = TOKEN_POST({username, password});
            const response = await fetch(url, options);

            if (!response.ok) throw new Error('Erro: Usuário inválido');

            const {token} = await response.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate('/conta');
        } catch (err) {
            setError(err.message);
            setLogged(false);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);

                    const {url, options} = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error('Token inválido');
                    await getUser(token);
                } catch (error) {
                    await userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogged(false);
            }
        }

        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider
            value={{userLogin, userLogout, data, error, logged, loading}}>{children}</UserContext.Provider>
    )
}