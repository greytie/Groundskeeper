import { atom } from "recoil";

export const itemListAtom = atom({
    key: "itemList",
    default: ["Chop wood", "Pick apples", "Milk cows"]
});