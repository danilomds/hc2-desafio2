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


export function Home() {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('').then((response) => {
      setData(response.data);
    });
  }, []);

  const handleCart = (index: number) => {
    const productStore = JSON.stringify(data[index]);
    localStorage.setItem(`@Produto-${index}`, productStore);
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
