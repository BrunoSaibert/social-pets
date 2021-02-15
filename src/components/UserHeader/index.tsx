import React from "react";
import { useRouter } from "next/router";

import UserHeaderNav from "../UserHeaderNav";
import Title from "../Typograph/Title";

import * as S from "./styles";

const UserHeader: React.FC = () => {
  const [title, setTitle] = React.useState("");

  const router = useRouter();

  React.useEffect(() => {
    const { pathname } = router;

    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [router]);

  return (
    <S.Container>
      <Title>{title}</Title>

      <UserHeaderNav />
    </S.Container>
  );
};

export default UserHeader;
