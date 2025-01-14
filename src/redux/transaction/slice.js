import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransactions,
  editTransactions,
  deleteTransactions,
  fetchTransacionsOfPeriot,
  fetchTransactionsCategories,
} from './thunk';

const initialState = {
  error: null,
  isLoading: false,
  transactions: [],
  balance: 0,
  transactionsCategories: [],
  selectedTransaction: {},
};

export const financesSlice = createSlice({
  name: 'finances',
  initialState,
  reducers: {
    setBalance: (state, { payload }) => {
      state.balance = payload;
    },
    setSelectedTransaction: (state, { payload }) => {
      state.selectedTransaction = payload;
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
    [editTransactions.pending](state) {
      state.isLoading = true;
    },
    [editTransactions.fulfilled](state, { payload }) {
      console.log('payload from edit:', payload.data);
      const index = state.transactions.findIndex(
        item => item.id === payload.data.id
      );
      console.log('index from edit thunk:', index);
      const editEditransacions = state.transactions;
      editEditransacions.splice(index, 1, payload.data);
      state.transactions = editEditransacions;
    },
    [editTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // ////////////////////////////////////
    [deleteTransactions.pending](state) {
      state.isLoading = true;
    },
    [deleteTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.transactions.findIndex(
        transaction => transaction.id === action.meta.arg
        // transaction => transaction.id === payload
      );
      state.transactions.splice(index, 1);
    },
    [deleteTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // ///////////////////////////

  [fetchTransacionsOfPeriot.fulfilled](state, { payload }) {
    const filtredArreyTransacionsByDate = state.transactions.filter(
      item =>
        item.data.start === payload.data.start &&
        item.data.end === payload.data.end
    );
    state.transactions = filtredArreyTransacionsByDate;
    //state.transactions = payload.sort((start, end) => {
    //return new Date(start.date) && new Date(end.date)});
    state.isLoading = false;
  },
  [fetchTransacionsOfPeriot.pending](state) {
    state.isLoading = true;
  },
  [fetchTransacionsOfPeriot.rejected](state, { payload }) {
    state.isLoading = false;
    state.error = payload;
  },

  /////////////////////////
  [fetchTransactionsCategories.pending]: state => {
    state.isLoading = true;
  },
  [fetchTransactionsCategories.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.transactionsCategories = action.payload.data;
  },
  [fetchTransactionsCategories.rejected]: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});

export const { setBalance, setSelectedTransaction } = financesSlice.actions;
export default financesSlice.reducer;
