import { createAction } from "@ngrx/store";

export const addBasket = createAction(
  "[Basket] Add Basket",
  (basket: number) => ({ basket })
);