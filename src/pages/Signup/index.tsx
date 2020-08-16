import React from 'react';
import {  FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';


const Signup: React.FC = () => {
  function handleSubmit (data:object): void{
    console.log(data)
  }

  return (
    <Container>
      <Background />  

      <Content>
        <img src={logoImg} alt=""/>

        <Form onSubmit={handleSubmit}>
          <h1>Faça o seu cadastro</h1>

          <Input name= "name" icon={FiUser} placeholder="Nome" />

          <Input name= "email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="forgot">
          <FiArrowLeft />
          Voltar para logon
        </a>
        
      </Content>     
    </Container>
  );
}

export default Signup;