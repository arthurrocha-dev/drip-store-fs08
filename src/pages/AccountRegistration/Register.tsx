import React, { useState } from "react";
import { AccountRegistrationProps } from "./Register.props";
import style from "./Register.module.css";
import { Button } from "../../components/Button/Button";
import { InputBox } from "../../components";
import { getAddressData } from "../../api/api";

export const AccountRegistration: React.FC<AccountRegistrationProps> = () => {
  interface DeliveryAddress {
    logradouro?: string;
    bairro?: string;
    localidade?: string;
  }

  const [address, setAddress] = useState<DeliveryAddress>({});

  const getAddress = async (cep: string) => {
    try {
      setAddress((await getAddressData(cep)).data);
    } catch (error) {
      console.error("Failed to fetch address:", error);
    }
  };

  return (
    <div className={style.SingUpPageContainer}>
      <h1>Criar Conta</h1>
      <form className={style.SingUpPageContaine_Form}>
        <section className={style.SingUpPageContaine_Form__section}>
          <div className={style.SingUpPageFormTitle}>
            <h4>Informações Pessoais</h4>
            <div className={style.Line}></div>
          </div>
          <InputBox
            id="user-name"
            label="Nome Completo *"
            placeholder="Digite seu nome aqui..."
            required={true}
            type="text"
          />
          <InputBox
            id="user-cpf"
            label="CPF *"
            placeholder="Digite seu CPF aqui..."
            required={true}
            type="text"
          />
          <InputBox
            id="user-email"
            label="E-mail *"
            placeholder="Digite seu E-mail aqui..."
            required={true}
            type="email"
          />
          <InputBox
            id="user-phone-number"
            label="Celular *"
            placeholder="Digite aqui o seu número de telefone para contato..."
            required={true}
            type="tel"
          />
        </section>
        <section className={style.SingUpPageContaine_Form__section}>
          <div className={style.SingUpPageFormTitle}>
            <h4>Informações de Entrega</h4>
            <div className={style.Line}></div>
          </div>
          <InputBox
            id="address-cep"
            label="CEP *"
            placeholder="Digite aqui o CEP do endereço de entrega..."
            onBlur={(e) => getAddress(e.target.value)}
            required={true}
            type="text"
          />
          <InputBox
            id="address-square"
            label="Endereço *"
            placeholder="Digite o logradouro do endereço de entrega..."
            value={address.logradouro || ""}
            required={true}
            type="text"
          />
          <InputBox
            id="address-neighborhood"
            label="Bairro *"
            placeholder="Digite o Bairro do endereço de entrega..."
            value={address.bairro || ""}
            required={true}
            type="text"
          />
          <InputBox
            id="address-city"
            label="Cidade *"
            placeholder="Digite sua Cidade do endereço de entrega..."
            value={address.localidade || ""}
            required={true}
            type="text"
          />
          <InputBox
            id="address-complement"
            label="Complemento"
            placeholder="Digite um Complemento..."
            type="text"
          />
        </section>

        <div className={style.SingUpPageFormButton}>
          <section className={style.NewsLetter}>
            <input id="new-letter" type="checkbox" />
            <label htmlFor="new-letter" className={style.NewsLetter}>
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </label>
          </section>
          <Button text="Cadastrar" />
        </div>
      </form>
    </div>
  );
};
