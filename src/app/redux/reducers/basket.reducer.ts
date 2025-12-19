import { createReducer, on } from "@ngrx/store";
import { addBasket } from "../actions/basket.action";

const initialState: number[] = [];
export const basketReducer = createReducer(
    initialState,
    on( addBasket, (state, { basket }) => [...state, basket] )
)