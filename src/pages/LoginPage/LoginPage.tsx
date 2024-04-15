import React from 'react'
import { LoginPageProps } from './LoginPage.props'
import style from './Login.module.css'
import { Button } from '../../components/Button/Button'
import Tenis from './assets/doubleshoeslogin.png'
import { ROUTES } from '../../routes'

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className={style.LoginPageContainer}>
      <div className={style.ContainerLoginForm}>
        <div className={style.LoginPageForm}>
          <h1>Acesse sua conta</h1>
          <p>Novo cliente? Estão registre-se aqui. </p>
          <label htmlFor="email">Login *</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            autoFocus={true}
          />
          <label htmlFor="password">Senha *</label>
          <input type="password" placeholder="Digite sua senha" />
          <p>
            <a href="/">Esqueci minha senha -</a>
          </p>
          <Button text="Acessar Conta" to={ROUTES.Home} />
        </div>
      </div>
        <img className={style.imgtenis} src={Tenis} alt="" />
    </div>
  )
}
