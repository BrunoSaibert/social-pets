import React from "react";
import Link from "next/link";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Container className="container">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a>Login / Criar</a>
        </Link>
      </nav>
    </S.Container>
  );
};

export default Header;
