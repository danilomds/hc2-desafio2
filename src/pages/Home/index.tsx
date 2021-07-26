import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import * as S from "./style";
import api from "../../services/api";

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

interface IClient {
  id: number;
  name: string;
  email: string;
  password: string;
}

export function Home() {
  const [data, setData] = useState<IProduct[]>([]);
  const [client, setClient] = useState<IClient[]>([]);

  useEffect(() => {
    api.get('').then((response) => {
      setData(response.data);
    });
  }, []);

  const handleCart = (index: number) => {
    const productStore = JSON.stringify(data[index]);
    localStorage.setItem(`@Produto-${index}`, productStore);
  };

  useEffect(() => {
    api.get("").then((response) => {
      setClient(response.data);
    });
  }, []);

  const handleCli = (index: number) => {
    const clientStore = JSON.stringify(data[index]);
    localStorage.setItem(`@Clients-${index}`, clientStore);
  };


  return (
    <S.Container>
      <Header />
      <section>
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="300" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={() => handleCart(index)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </section>
    </S.Container>
  );
}
