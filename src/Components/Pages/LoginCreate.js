import React from 'react';
import Imput from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helpers/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { USER_POST } from '../../api';
import { UserContext } from '../../Contexts/UserContext';
import Head from '../Helpers/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value
      });
      const { response } = await request(url, options);
      if (response.ok) userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title='Crie sua conta' />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Imput label='Usuário' type='text' name='username' placeholder='Informe o nome de usuário' {...username} />
        <Imput label='E-mail' type='email' name='email' placeholder='Informe o seu e-mail' {...email} />
        <Imput label='Senha' type='password' name='password' placeholder='Informe uma senha' {...password} />
        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
