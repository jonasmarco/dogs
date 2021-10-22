import React from 'react'
import {Link} from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import {UserContext} from '../../Contexts/UserContext';
import Error from '../Helpers/Error';
import styles from '../../Styles/LoginForm.module.css';
import stylesBtn from '../../Styles/Button.module.css';
import Head from '../Helpers/Head';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const {userLogin, loading, error} = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLeft">
            <Head title='Login' />
            <h1 className="title">Login</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username"
                       placeholder="Entre com o nome de usuário" {...username} />
                <Input label="Senha" type="password" name="password" placeholder="Entre com a senha" {...password} />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
                <Error error={error && 'Dados incorretos.'}/>
            </form>

            <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a senha?</Link>

            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginForm