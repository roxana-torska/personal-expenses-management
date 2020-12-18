import {
  ADD_EXPENSE,
  LIST_EXPENSES,
  CLEAR_EXPENSES,
  SHOW_ERROR,
  FETCH_RATES_FAILURE,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_REQUEST,
} from './types';
import commandParser, { commandType } from '../helpers/commandParser';
import CurrencyService from '../services/currency.service';

const executeCommand = (command) => {
  const parsedCommand = commandParser(command);

  switch (parsedCommand.type) {
    case commandType.ADD:
      return addExpense(parsedCommand.expense);

    case commandType.LIST:
      return listExpenses();

    case commandType.CLEAR:
      return clearExpenses(parsedCommand.date);

    case commandType.TOTAL:
      return fetchRates(parsedCommand.currency);

    default:
      return showError(parsedCommand.errorMessage);
  }
};

const addExpense = (expense) => {
  return {
    type: ADD_EXPENSE,
    payload: expense,
  };
};

const listExpenses = () => {
  return {
    type: LIST_EXPENSES,
  };
};

const clearExpenses = (date) => {
  return {
    type: CLEAR_EXPENSES,
    payload: date,
  };
};

const fetchRates = (currency) => (dispatch) => {
  const currencyService = new CurrencyService();

  dispatch({
    type: FETCH_RATES_REQUEST,
  });

  currencyService
    .getRates()
    .then((rates) => {
      dispatch({
        type: FETCH_RATES_SUCCESS,
        payload: {
          currency,
          rates,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_RATES_FAILURE,
        payload: error,
      });
    });
};

const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  };
};

export { executeCommand, addExpense, listExpenses, clearExpenses, fetchRates };
