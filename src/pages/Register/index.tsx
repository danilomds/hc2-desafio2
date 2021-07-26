import { useState } from 'react';
import { Header } from '../../components/Header';
import * as Icon from 'react-feather';
import * as S from './style';


export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = {
    name,
    email,
    password
  }
    

  function handleSubmit(key: string, values: string) {
    if(values) {
      localStorage.setItem(key, values);    
      alert('Cadastro realizado com sucesso'); 
      setName('');
      setEmail('');
      setPassword('');
    }

}
  

  return (
  
      <S.Container> 
        <Header />
        <S.Form >    
          <S.Input
            type="name"
            placeholder="  Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <S.Input
            type="email"
            placeholder="  E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <S.Input
            type="password"
            placeholder="  Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <S.Button onClick={() => handleSubmit('ls_name', JSON.stringify(data))}>
            Cadastrar
            <Icon.ArrowRight />
          </S.Button>

          
          </S.Form>         
     
      </S.Container>
  
  )
}
