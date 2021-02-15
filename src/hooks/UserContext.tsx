import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../services/api";
import { useRouter } from "next/router";

interface User {
  id: number;
  nome: string;
  email: string;
}

interface AuthContextData {
  userLogin({ username, password }): void;
  userLogout(): void;
  data: User;
  loading: boolean;
  login: boolean;
  error: string;
}

export const UserContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

export const UserStorage: React.FC = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    if (json) {
      setData(json);
      setLogin(true);
    }
  }

  async function userLogin({ username, password }) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });

      const response = await fetch(url, options);
      console.log(response);
      if (!response.ok) throw new Error("Erro: Usuário inválido");

      const { token } = await response.json();

      window.localStorage.setItem("token", token);

      await getUser(token);

      setLogin(true);
      router.push("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);

    window.localStorage.removeItem("token");

    router.push("/login");
  }, []);

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);

          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");

          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, loading, login, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
