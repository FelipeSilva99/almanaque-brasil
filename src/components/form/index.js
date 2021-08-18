import React, {useState} from 'react';
import styled from 'styled-components';

//Component
import Input from './input';
import Button from '../buttons/button';
import Select from './contentSelect';

// Styles
const Container = styled.form`
  margin: auto;
  width: 100%;
  max-width: 425px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${props => props.login ? 'flex-start' : 'center'};
  flex-direction: column;
`;

const Label = styled.label`
  max-width: 235px;
  text-align: center;
  padding: ${props => props.login ? '1rem 0 .5rem' : '2rem 0 .5rem'};
  font-size: 1.5rem;
  font-weight: 900;
  color: #373737;
`;

const Subtitle = styled.p`
  padding-bottom: 1rem;
  font-size: 1rem;
  color: #373737;
  text-align: center;
`;

const Error = styled.p`
  padding-bottom: 1rem;
  padding-left: 1rem;
  font-size: .75rem;
  color: #FF3333;
  align-self: self-end;
`;

const ButtonSpacer = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const Form = ({
  label,
  subtitle,
  name,
  value,
  children,
  placeholder,
  type,
  isError,
  selector,
  lastScreen,
  handleChange,
  isViewPassword,
  handleViewPassword,
  handleSubmit,
  isTermsAccepted,
  handleAceptTerms,
  // Quando é um email de form
  login,
  attention,
  emailValue,
  passValue,
  handleLogin
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return login
    ?(
      <Container onSubmit={handleLogin} login>
        <Label login={login}>Email</Label>
        <Input
          name={"email"}
          value={emailValue}
          placeholder={"Digite seu email aqui"}
          type={'email'}
          handleChange={handleChange}
        />

        <Label login={login}>Senha</Label>
        <Input
          name={"password"}
          value={passValue}
          placeholder={"Digite sua senha aqui"}
          type={showPassword ? 'text' : 'password'}
          handleChange={handleChange}
          handleViewPassword={(e) => {
            e.preventDefault()
            setShowPassword(!showPassword)
          }}
        />
        <Error>{isError}</Error>
        <ButtonSpacer>
          <Button>Entrar</Button>
        </ButtonSpacer>
      </Container>
    )
    : (
      <Container onSubmit={handleSubmit}>
        <Label>{label}</Label>
        <Subtitle>{subtitle}</Subtitle>
        {selector ? (
          <Select
            value={value}
            name={name}
            handleChange={handleChange}
            isTermsAccepted={isTermsAccepted}
            handleAceptTerms={handleAceptTerms}
            attention={attention}
            isError={isError}
          />
        ) : (
          <>
            <Input
              name={name}
              value={value}
              placeholder={placeholder}
              type={type}
              handleChange={handleChange}
              isViewPassword={isViewPassword}
              handleViewPassword={handleViewPassword}
            />
            <Error>{isError}</Error>
          </>
        )}
        <Button>{children ? children : 'Próximo'}</Button>
      </Container>
  );
}

export default Form;