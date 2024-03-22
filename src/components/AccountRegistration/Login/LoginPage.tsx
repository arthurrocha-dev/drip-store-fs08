import React from 'react'
import { LoginPageProps } from './LoginPage.props'
import style from './Login.module.css'
import { Button } from '../../Button/Button'
import Tenis from '../Login/assets/doubleshoeslogin.png'

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className={style.LoginPageContainer}>
      <div className={style.ContainerLoginForm}>
        <div className={style.LoginPageForm}>
          <h1>Acesse sua conta</h1>
          <p>Novo cliente? Estão registre-se aqui. </p>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            autoFocus={true}
          />
          <label htmlFor="password">Senha:</label>
          <input type="password" placeholder="Digite sua senha" />
          <p>
            <a href="/">Esqueci minha senha -</a>
          </p>
          <Button text="Entrar" />
        </div>
      </div>
      <div className={style.imgtenis}>
        <img src={Tenis} alt="" />
      </div>
    </div>
  )
}
