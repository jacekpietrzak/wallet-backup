import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransactions,
  editTransactions,
  deleteTransactions,
  fetchTransacionsOfPeriot,
} from './thunk';

export const financesSlice = createSlice({
  name: 'finances',
  initialState: {
    error: null,
    isLoading: false,
    transactions: [],
    balance: 0,
  },
  reducers: {
    setBalance: (state, { payload }) => {
      state.balance = payload;
    },
  },
  extraReducers: {
    [fetchTransactions.fulfilled](state, { payload }) {
      state.transactions = payload;
      state.isLoading = false;
    },
    [fetchTransactions.pending](state) {
      state.isLoading = true;
    },
    [fetchTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // /////////////////////
    [addTransactions.fulfilled](state, { payload }) {
      state.transactions.push(payload);
      state.isLoading = false;
    },
    [addTransactions.pending](state) {
      state.isLoading = true;
    },
    [addTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // /////////////////////////////
    [editTransactions.fulfilled](state, { payload }) {
      const index = state.transactions.findIndex(
        item => item._id === payload._id
      );
      const editEditransacions = state.transactions;
      editEditransacions.splice(index, 1, payload);
      state.transactions = editEditransacions;
    },
    [editTransactions.pending](state) {
      state.isLoading = true;
    },
    [editTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // ////////////////////////////////////
    [deleteTransactions.fulfilled](state, { payload }) {
      const editEditransacions = state.transactions;
      const index = editEditransacions.findIndex(
        item => item._id === payload._id
      );
      editEditransacions.splice(index, 1);
      state.transactions = editEditransacions;
    },
    [deleteTransactions.pending](state) {
      state.isLoading = true;
    },
    [deleteTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // ///////////////////////////

  [fetchTransacionsOfPeriot.fulfilled](state) {
    state.isLoading = false;
  },
  [fetchTransacionsOfPeriot.pending](state) {
    state.isLoading = true;
  },
  [fetchTransacionsOfPeriot.rejected](state, { payload }) {
    state.isLoading = false;
    state.error = payload;
  },
});

export const { setBalance } = financesSlice.actions;
export default financesSlice.reducer;
