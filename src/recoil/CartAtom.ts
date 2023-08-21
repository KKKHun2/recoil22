import { atom, selector,RecoilValue } from "recoil";

interface CartAItem{
    price:number;
    id:number;
}
export const CartAtom = atom<CartAItem[]> ({
  key: "CartAtom",
  default: [],
});


export const QuantitySelector:RecoilValue<string> = selector({
  key: "QuantitySelector",
  get: ({ get }) => {
    const CurrentItem = get(CartAtom);
    return CurrentItem.length.toLocaleString();
  },
});

export const TotalPriceSelector:RecoilValue<string> = selector({
  key: "TotalPriceSelector",
  get: ({ get }) => {
    const CurrentItem = get(CartAtom);
    return CurrentItem.reduce(
      (acc, cur) => acc + cur.price,
      0
    ).toLocaleString();
  },
});
