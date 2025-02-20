import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  description?: string;
  rating: { rate: number; count: number };
  count: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Ürünü sepete eklerken
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Eğer ürün zaten sepette varsa, count'u artır
        existingItem.count += 1;
      } else {
        // Eğer ürün yoksa, yeni ürün ekle
        state.items.push({ ...action.payload, count: 1 });
      }
    },

    // Ürünü sepette silerken
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        if (existingItem.count > 1) {
          // Eğer count 1'den fazla ise, sadece count'u azalt
          existingItem.count -= 1;
        } else {
          // Eğer count 1 ise, ürünü tamamen sepetten çıkar
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
