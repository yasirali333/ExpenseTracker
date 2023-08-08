import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type InitialStateTypes = {
  Transaction: TransactionTypes[];
};


export type TransactionTypes = {
  id: number;
  text: string;
  amount: number;
};

const initailState: InitialStateTypes = {
  Transaction: [{ id: 1, text: "Books", amount: 200 }],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initailState,
  reducers: {
    addExpense: (state, action: PayloadAction<TransactionTypes>) => {
      state.Transaction.unshift(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<number>) => {
      state.Transaction = state.Transaction.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const { addExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;