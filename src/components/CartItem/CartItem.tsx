import React from "react";
import styled from "styled-components"
import  LogoImage from "../../assets/disney.jpg";
import {useSetRecoilState} from "recoil";
import { CartAtom } from "../../recoil/CartAtom";
import {ICartItem} from "../../model/dummyData"

const CartItem = ({data:ICartItem}) =>{
    const setCartItem = useSetRecoilState(CartAtom);
    const {id, title, description, price} = data;

    const removeFromCart = () => {
        setCartItem((prev) => prev.filter((e)=> e.id !==id));
    };
return 

}