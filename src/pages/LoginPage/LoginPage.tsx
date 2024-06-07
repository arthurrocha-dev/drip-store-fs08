import React, { useEffect, useState } from "react";
import { LoginPageProps } from "./LoginPage.props";
import style from "./Login.module.css";
import { Button } from "../../components/Button/Button";
import Tenis from "./assets/doubleshoeslogin.png";
import { login } from "../../api/api";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { AlertCard } from "../../components";

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useAuthentication();

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const singIN = () => {
    setIsLoading(true);
    login(username, password)
      .then(() => {
        setIsAuthenticated(true);
        navigate(ROUTES.Home);
      })
      .catch((error) => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
        console.error("Login failed:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    isAuthenticated && navigate(ROUTES.Home);
  }, [isAuthenticated]);

  return (
    <div className={style.LoginPageContainer}>
      <form className={style.ContainerLoginForm}>
        <div className={style.LoginPageForm}>
          <h1>Acesse sua conta</h1>
          <p>Novo cliente? Então registre-se aqui. </p>
          <label htmlFor="email">Login *</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            autoFocus={true}
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password">Senha *</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={handlePasswordChange}
          />
          <p>
            <a href="/">Esqueci minha senha -</a>
          </p>
          <Button
            text={isLoading ? "Carregando..." : "Acessar Conta"}
            onClick={singIN}
          />
        </div>
        {isVisible && (
          <AlertCard title="Erro de acesso" type="error">
            <p>
              Usuario ou senha inválido. Verifique os dados, e tente novamente.
            </p>
          </AlertCard>
        )}
      </form>
      <img className={style.imgtenis} src={Tenis} alt="" />
    </div>
  );
};
