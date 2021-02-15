import React from "react";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import Error from "../../components/Typograph/Error";

import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../hooks/UserContext";

import FormContainer from "../../containers/Form";

import { USER_POST } from "../../services/api";

const Criar: React.FC = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) {
      userLogin({ username: username.value, password: password.value });
    }
  }

  return (
    <FormContainer title="Cadastre-se">
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" id="username" {...username} />

        <Input label="E-mail" type="email" id="email" {...email} />

        <Input label="Senha" type="password" id="password" {...password} />

        <Button disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>

        <Error error={error} />
      </form>
    </FormContainer>
  );
};

export default Criar;
