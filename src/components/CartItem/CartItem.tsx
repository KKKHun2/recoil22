import React from "react";
import styled from "styled-components"
import  LogoImage from "../../assets/McLogo.jpg";
import {useSetRecoilState} from "recoil";
import { CartAtom,CartAItem } from "../../recoil/CartAtom";


interface CartItemProps {
    data: CartAItem;
  }


function CartItem({data}: CartItemProps) {
    const setCartItem = useSetRecoilState(CartAtom);
    const {id, title, description, price} = data;

    const removeFromCart = () => {
        setCartItem((prev) => prev.filter((e)=> e.id !==id));
    };
    
return (
    <Wrapper>
      <div>
        <Image src={LogoImage} alt={title}></Image>
        <ColumnWrapper>
          <Title>{title}</Title>
          <span>{description}</span>
        </ColumnWrapper>
      </div>
      <RightWrapper>
        <Title>{`${price?.toLocaleString()}원`}</Title>
        <Button onClick={removeFromCart}>삭제</Button>
      </RightWrapper>
    </Wrapper>
)

}
const Wrapper = styled.li`
    width:100%;
    padding:10px;
    border: 2px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Image =styled.img`
    width:100px;
    height:100px;
    float:left;
    margin-right: 20px;
    border:2px solid;
    border-radius: 8px;
`
const ColumnWrapper = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  > span {
    text-align: right;
  }
`;
const Title = styled.span`
  font-weight: var(--bold);
  font-size: 18px;
`;
const Button = styled.button`
  display: block;
  padding: 4px 8px;
  width: fit-content;
`;

export default CartItem;