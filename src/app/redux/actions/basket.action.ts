import { createAction } from "@ngrx/store";

export const addBasket = createAction(
  "[Basket] Add Basket",
  (basket: number) => ({ basket })
);

export const selectBasket = createAction(
  "[Basket] Select Basket",
  (basket: number[]) => ({ basket })
);