import { useState } from 'react';
import { Header } from '../../components/Header';
import * as Icon from 'react-feather';
import * as S from './style';

export function Products() {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const data = {
    photo,
    name,
    description,
    price
  }
    

  function handleSubmit(key: string, values: string) {
    if(values) {
      localStorage.setItem(key, values);    
      alert('Cadastro realizado com sucesso'); 
      setPhoto('');
      setName('');
      setDescription('');
      setPrice('');
    }
}  

  return (
  
      <S.Container> 
        <Header />
        <S.Form > 
        <S.Input
            type="photo"
            placeholder="  URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        
          <S.Input
            type="name"
            placeholder="  Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <S.Input
            type="description"
            placeholder="  Descrição do Produto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <S.Input
            type="price"
            placeholder="  Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <S.Button onClick={() => handleSubmit('ls_name', JSON.stringify(data))}>
            Cadastrar
            <Icon.ArrowRight />
          </S.Button>

          <S.Links to='/'>
            <Icon.ArrowLeft />
            Voltar
            </S.Links>

          
          </S.Form>         
     
      </S.Container>
  
  )
}
