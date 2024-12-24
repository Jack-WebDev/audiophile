"use client";

import { createContext, useReducer, ReactNode, useContext } from "react";

export type CartItem = {
  slug: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

// interface CartProps extends CartItem {
//   id: number;
//   quantity: number;
// }

type UpdateQuantityPayload = {
  slug: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { slug: string } }
  | { type: "UPDATE_QUANTITY"; payload: UpdateQuantityPayload }
  | { type: "CLEAR_CART" };

interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const initialState: CartState = { items: [] };

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.slug !== action.payload.slug),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.slug === action.payload.slug
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ),
      };

    case "CLEAR_CART":
      return { items: [] };
    default:
      throw new Error("Unhandled action type");
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
