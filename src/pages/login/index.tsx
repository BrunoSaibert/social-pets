import React from "react";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import Error from "../../components/Typograph/Error";

import useForm from "../../hooks/useForm";
import { UserContext } from "../../hooks/UserContext";

import FormContainer from "../../containers/Form";

const Login: React.FC = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin({ username: username.value, password: password.value });
    }
  }

  return (
    <FormContainer title="Login" showReset showCadastro>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" id="username" {...username} />

        <Input label="Senha" type="password" id="password" {...password} />

        <Button disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>

        <Error error={error} />
      </form>
    </FormContainer>
  );
};

export default Login;
