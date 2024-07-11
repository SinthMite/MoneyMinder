import { combineReducers, configureStore } from '@reduxjs/toolkit';
import signedInReducer from '../State/SignedInSlice';
import incomeReducer from '../State/incomeSlice';
import debitCardReducer from '../State/debitCardSlice';

const rootReducer = combineReducers({
  signedIn: signedInReducer,
  income: incomeReducer,
  debitCard: debitCardReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
