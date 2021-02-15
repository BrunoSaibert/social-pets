import React from "react";
import Link from "next/link";

import * as S from "./styles";

import { UserContext } from "../../hooks/UserContext";

const Header: React.FC = () => {
  const { data } = React.useContext(UserContext);

  return (
    <S.Container>
      <S.Nav className="container">
        <Link href="/">
          <S.Logo aria-label="Pets - Home">
            <img src="/dogs.svg" alt="logo" />
          </S.Logo>
        </Link>

        {data ? (
          <div>
            <Link href="/conta">
              <S.Login>{data.nome}</S.Login>
            </Link>
          </div>
        ) : (
          <Link href="/login">
            <S.Login>Login / Criar</S.Login>
          </Link>
        )}
      </S.Nav>
    </S.Container>
  );
};

export default Header;
