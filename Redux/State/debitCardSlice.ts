import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DebitCard = {
  cardNumber: string;
  cardHolderName: string;
  cardAmount: number;
};

const initialDebitCardState: DebitCard[] = [];

export const debitCardSlice = createSlice({
  name: 'debitCard',
  initialState: initialDebitCardState,
  reducers: {
    setDebitCard: (state, action: PayloadAction<DebitCard>) => {
      state.push(action.payload);
    },
    deleteDebitCard: (state, action: PayloadAction<string>) => {
        return state.filter(card => card.cardNumber !== action.payload);
      }
  },
});

export const { setDebitCard, deleteDebitCard } = debitCardSlice.actions;
export default debitCardSlice.reducer;
