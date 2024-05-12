import React from "react";
import { AccountRegistrationProps } from "./Register.props";
import style from "./Register.module.css";
import { Button } from "../../components/Button/Button";
import { ROUTES } from "../../routes";

export const AccountRegistration: React.FC<AccountRegistrationProps> = () => {
  return (
    <div className={style.LoginPageContainer}>
      <div className={style.LoginTitle}>
        <h1>Criar Conta</h1>

        {/* Informações do Usuário */}

        <div className={style.LoginPageForm}>
          <div className={style.LoginPageFormTitle}>
            <h4>Informações Pessoais</h4>
            <div className={style.Line}></div>
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="email">Nome Completo *</label>
            <input
              type="email"
              placeholder="Insira seu nome"
              autoFocus={true}
            />
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="password">CPF *</label>
            <input type="password" placeholder="Insira seu CPF" />
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="password">E-mail *</label>
            <input type="password" placeholder="Insira seu E-mail" />
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="password">Celular *</label>
            <input type="password" placeholder="Insira seu Celular" />
          </div>
        </div>

        {/* Informações de Entrega */}

        <div className={style.LoginPageForm}>
          <div className={style.LoginPageFormTitle}>
            <h4>Informações de Entrega</h4>
            <div className={style.Line}></div>
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="email">Endereço *</label>
            <input type="email" placeholder="Insira seu endereço" />
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="password">Bairro *</label>
            <input type="password" placeholder="Insira seu Bairro" />
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="password">Cidade *</label>
            <input type="password" placeholder="Insira seu Cidade" />
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="password">CEP *</label>
            <input type="password" placeholder="Insira seu CEP" />
          </div>
          <div className={style.LoginPageFormItem}>
            <label htmlFor="password">Completo *</label>
            <input type="password" placeholder="Insira um Completo" />
          </div>
        </div>

        {/* Newsletter */}

        <div className={style.LoginPageFormButton}>
          <section className={style.NewsLetter}>
            <input type="checkbox" />
            <a className={style.NewsLetter}>
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </a>
          </section>
          <Button text="Acessar Conta" to={ROUTES.Home} />
        </div>
      </div>
    </div>
  );
};
