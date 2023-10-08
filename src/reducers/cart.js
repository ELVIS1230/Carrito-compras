export const cartInitialState = [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAN_CART: 'CLEAN_CART' 
} 

export const cartReducer = (state, action) => {
    const { payload: actionPayload, type: actionType } = action;
    switch (actionType) {
      case CART_ACTION_TYPES.ADD_TO_CART: {
        const { id } = actionPayload;
        const productInCartIndex = state.findIndex((item) => item.id === id);
  
        
      if (productInCartIndex >= 0) {
          const newState = structuredClone(state);
    
          newState[productInCartIndex].quantity += 1;
    
          return newState
        }
        return [
            ...state,
            {
                ...actionPayload,
                quantity: 1
            }
        ]
      }
  
      case CART_ACTION_TYPES.REMOVE_FROM_CART : {
          const {id} = actionPayload
          return state.filter(item => item.id !== id)
      }
      case CART_ACTION_TYPES.CLEAN_CART: {
          return cartInitialState
      }
    }
    return state
  };