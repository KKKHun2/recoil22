import styled from "styled-components";
import ProductCard from "./../component/ProductCard/ProductCard";
import {dummyData} from "../model/dummyData"

interface CartItem {
    id: number;
    price: number;
    title: string;
    description: string;
  }
  
function Main() {
  return (
    <ListWrapper>
      {dummyData.map((e:CartItem) => {
        return (
          <li key={e.id}>
            <ProductCard data={e} />
          </li>
        );
      })}
    </ListWrapper>
  );
}
const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export default Main;
