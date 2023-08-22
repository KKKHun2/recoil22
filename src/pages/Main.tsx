import styled from "styled-components";
import ProductCard from "../components/ProductCard/ProductCard";
import {dummyData} from "../model/dummyData";
import {CartAItem} from "../recoil/CartAtom";

  
function Main() {
  return (
    <ListWrapper>
      {dummyData.map((e:CartAItem) => {
        return (
          <ProductCardWrapper key={e.id}>
            <ProductCard data={e} />
          </ProductCardWrapper>
        );
      })}
    </ListWrapper>
  );
}
const ListWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);

  justify-content: center;
  gap: 8px;
`;

const ProductCardWrapper = styled.li`
  list-style: none; 
`;

export default Main;
