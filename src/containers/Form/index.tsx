import React from "react";
import Link from "next/link";

import Button from "../../components/Forms/Button";
import Title from "../../components/Typograph/Title";

import * as S from "./styles";

interface Props {
  title: string;
  showReset?: boolean;
  showCadastro?: boolean;
}

const FormContainer: React.FC<Props> = ({
  children,
  title,
  showReset,
  showCadastro,
}) => {
  return (
    <S.Container>
      <S.Content>
        <Title>{title}</Title>

        <S.FormWarper>{children}</S.FormWarper>

        {showReset && (
          <Link href="/login/perdeu">
            <S.PerdeuSenha>Perdeu a senha?</S.PerdeuSenha>
          </Link>
        )}

        {showCadastro && (
          <S.Cadastro>
            <Title as="h2" sub>
              Cadastre-se
            </Title>
            <p>Ainda não possui conta? Cadastre-se no site.</p>

            <Link href="/login/criar">
              <Button as="a">Cadastro</Button>
            </Link>
          </S.Cadastro>
        )}
      </S.Content>
    </S.Container>
  );
};

export default FormContainer;
