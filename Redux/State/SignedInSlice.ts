import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignedInState {
    value: boolean;
}

const initialSignedInState: SignedInState = {
    value: false,
};

export const signedInSlice = createSlice({
    name: 'signedIn',
    initialState: initialSignedInState,
    reducers: {
        setSignedIn: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});

export const { setSignedIn } = signedInSlice.actions;
export default signedInSlice.reducer;
