// client/src/store/reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, SET_PRODUCTS, SET_LOADING, SET_ERROR } from './actions';

const initialState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;