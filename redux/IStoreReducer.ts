import ICartInitialState from './types/cart';
import { IFoods } from './slices/foods/types';

export default interface IStoreReducer {
    _cartReducer: ICartInitialState,
    _foodReducer: IFoods,
}