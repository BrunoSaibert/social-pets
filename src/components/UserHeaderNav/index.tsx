import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../Forms/Button";

import { UserContext } from "../../hooks/UserContext";

import * as S from "./styles";

const links = [
  { title: "Minhas fotos", href: "/conta", img: "feed" },
  { title: "Estatisticas", href: "/conta/estatisticas", img: "estatisticas" },
  { title: "Adicionar foto", href: "/conta/postar", img: "adicionar" },
];

const UserHeaderNav: React.FC = () => {
  const [mobile, setMobile] = React.useState(null);

  const router = useRouter();

  const { userLogout } = React.useContext(UserContext);

  return (
    <S.Container>
      {links.map(({ title, href, img }) => (
        <Link href={href} key={title}>
          <a className={router.pathname === href && "active"}>
            <img src={`/${img}.svg`} alt={title} />
            {mobile && title}
          </a>
        </Link>
      ))}

      <button onClick={userLogout}>
        <img src="/sair.svg" alt="Deslogar" />
        {mobile && "Sair"}
      </button>
    </S.Container>
  );
};

export default UserHeaderNav;
