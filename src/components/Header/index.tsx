import * as S from "./style";

import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <S.Container>
      <S.WrapLeft>
        <img src={Logo} alt="logo" />
        <h3>DM.tech</h3>
      </S.WrapLeft>

      <S.Wrap></S.Wrap>

      <S.WrapRigt>
        <S.Links to='/register'>Clientes</S.Links>
        <S.Links to='/products'>Produtos</S.Links>
      </S.WrapRigt>
    </S.Container>
  );
}
