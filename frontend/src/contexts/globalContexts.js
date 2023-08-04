import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1/";

const GlobalContexts = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState([]);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((error) => {
        setError(error.response);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
    // console.log(response.data);
  };

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };

  return (
    <GlobalContexts.Provider
      value={{ addIncome, getIncomes, incomes, deleteIncome, totalIncome }}
    >
      {children}
    </GlobalContexts.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContexts);
};
