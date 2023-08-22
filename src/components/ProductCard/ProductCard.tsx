import React from "react";
import styled from "styled-components";
import McLogo from "../../assets/McLogo.jpg";
import { useRecoilState } from "recoil";
import { CartAtom,CartAItem } from "../../recoil/CartAtom";

interface CartItemProps {
    data: CartAItem;
  }


function ProductCard({data}: CartItemProps) {
  // 구조분해할당을 통해 data.id, data.title 대신 간단하게 사용
  const { id, title, description, price } = data;

  // 아톰 불러오기
  const [cartItem, setCartItem] = useRecoilState(CartAtom);

  // 이미 장바구니에 들어있는지 확인
  const isAlreadyInCart = cartItem?.filter((e) => e.id === id).length;

  /**
   * 장바구니에 있는지 확인후, 없을때만 아톰에 추가
   */
  const AddToCart = () => {
    if (!isAlreadyInCart) {
      setCartItem((prev) => [...prev, data]);
    }
  };

  return (
    <Wrapper>
      <img width={276} height={276} src={McLogo} alt={`${id}의 더미이미지`} />
      <Price>{price?.toLocaleString()}원</Price>
      <Haeding>{title}</Haeding>
      <MaxLine1>{description}</MaxLine1>
      <Button onClick={AddToCart} disabled={!!isAlreadyInCart}>
        {isAlreadyInCart ? `장바구니에 추가됬습니다`: "장바구니에 추가"}
      </Button>
    </Wrapper>
  );
};

const Price = styled.span`
  font-size: 20px;
  color: var(--font-black);
  font-weight: var(--bold);
  margin-top:15px;
`;
const Wrapper = styled.div`
  padding: 25px;
  margin-bottom: 10px;
  width: 310px;
  height: 100%;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
const MaxLine1 = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
`;
const Button = styled.button<{ disabled?: boolean }>`
  padding: 8px;
  color: ${props => (props.disabled ? "var(--font-gray)" : "#000")};
  background-color: var(--main);
  &:disabled {
    background-color: var(--line-gray);
  }
`;

export const Haeding = styled.span`
  font-size: 18px;
  font-weight: var(--bold);
  margin-top:10px;
`;

export default ProductCard;
