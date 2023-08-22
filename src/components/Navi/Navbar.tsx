import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./../Logo";
import McLogo from "../../assets/McLogo.jpg";

function Navbar() {
  const location = useLocation(); // 현재 경로 가져오기

  return (
    <Header>
      <Wrapper>
        <Link to={"/"} aria-label="홈으로 이동">
          <Logo src={McLogo} alt="홈 아이콘" />
        </Link>
        <Nav>
          <StyledLink to={"/"} isActive={location.pathname === "/"} aria-label="홈으로 이동">
            홈
          </StyledLink>
          <StyledLink to={"/cart"} isActive={location.pathname === "/cart"} aria-label="장바구니로 이동">
            장바구니
          </StyledLink>
        </Nav>
      </Wrapper>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Nav = styled.nav`
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
`;

const StyledLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "red" : "black")};
`;

export default Navbar;
