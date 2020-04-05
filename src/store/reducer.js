import * as actionTypes from "./actions";

const initialState = {
  ingredient: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 0,
};

const IngredientPrices = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 0.4,
  meat: 1.2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + IngredientPrices[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.ingredientName]: state.ingredient[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - IngredientPrices[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
