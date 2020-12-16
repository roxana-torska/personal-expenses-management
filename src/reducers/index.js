import {
    ADD_EXPENSE,
    LIST_EXPENSES,
    CLEAR_EXPENSES,
    SHOW_ERROR,
    FETCH_RATES_SUCCESS,
    FETCH_RATES_REQUEST,
    FETCH_RATES_FAILURE,
  } from '../actions/actionTypes';
  
  let expenseId = 0;
  
  const addExpense = (state, expense) => {
    expenseId += 1;
  
    return {
      ...state,
      expenses: [...state.expenses, { ...expense, id: expenseId }],
      total: null,
      error: null,
    };
  };
  
  const getExpenses = (state) => {
    return {
      ...state,
      expenses: [
        ...state.expenses.sort((a, b) => {
          let result;
  
          if (a.date < b.date) result = 1;
          if (a.date === b.date) result = 0;
          if (a.date > b.date) result = -1;
  
          return result;
        }),
      ],
      total: null,
      error: null,
    };
  };
  
  const removeExpenses = (state, date) => {
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.date !== date),
      total: null,
      error: null,
    };
  };
  
  const fetchRatesRequest = (state) => {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  };
  
  const updateTotal = (state, { currency, rates }) => {
    let total = 0;
  
    state.expenses.forEach((expense) => {
      const targetingRate = currency === 'EUR' ? 1 : rates[currency];
      const resultingRate = targetingRate / rates[expense.currency];
  
      total += resultingRate * expense.value;
    });
  
    return {
      ...state,
      total: `${total.toFixed(2)} ${currency}`,
      isLoading: false,
      error: null,
    };
  };
  
  const fetchRatesFailure = (state) => {
    const errorMessage = 'Something wrong with your request';
  
    return {
      ...state,
      isLoading: false,
      error: errorMessage,
    };
  };
  
  const showError = (state, errorMessage) => {
    return {
      ...state,
      error: errorMessage,
    };
  };
  
  const initialState = {
    expenses: [],
    total: 0,
    isLoading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case ADD_EXPENSE:
        return addExpense(state, payload);
  
      case LIST_EXPENSES:
        return getExpenses(state);
  
      case CLEAR_EXPENSES:
        return removeExpenses(state, payload);
  
      case FETCH_RATES_REQUEST:
        return fetchRatesRequest(state);
  
      case FETCH_RATES_SUCCESS:
        return updateTotal(state, payload);
  
      case FETCH_RATES_FAILURE:
        return fetchRatesFailure(state, payload);
  
      case SHOW_ERROR:
        return showError(state, payload);
  
      default:
        return state;
    }
  };
  
  export default reducer;
  