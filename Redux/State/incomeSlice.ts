import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IncomeState {
    value: number;
}

const initialIncomeState: IncomeState = {
    value: 0,
};

export const incomeSlice = createSlice({
    name: 'income',
    initialState: initialIncomeState,
    reducers: {
        setIncome: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { setIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
