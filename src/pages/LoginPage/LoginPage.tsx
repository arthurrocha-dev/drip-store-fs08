import React, { useState } from "react";
import { LoginPageProps } from "./LoginPage.props";
import style from "./Login.module.css";
import Tenis from "./assets/doubleshoeslogin.png";
import { ROUTES } from "../../routes";
import { singin } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AlertCard, Button } from "../../components";

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const singIN = () => {
    setIsLoading(true);
    singin(username, password)
      .then(() => {
        navigate(ROUTES.Home);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
        setIsLoading(false);
        console.error("Login failed:", error);
      });
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

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
