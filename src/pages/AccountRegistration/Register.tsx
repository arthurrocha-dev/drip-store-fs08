import React from 'react'
import { AccountRegistrationProps } from './Register.props'
import style from './Register.module.css'
import { Button } from '../../components/Button/Button'

export const AccountRegistration: React.FC<AccountRegistrationProps> = () => {
    return (
        <div className={style.LoginPageContainer}>
                <h1>Criar Conta</h1>
            <div className={style.ContainerLoginForm}>
                <div className={style.LoginPageForm}>
                    <h1>Cadastro</h1>
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
                    <Button text="Acessar Conta" />
                </div>
            </div>
        </div>
    )
}