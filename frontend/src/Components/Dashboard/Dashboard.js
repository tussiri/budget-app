import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../Chart/Chart.js";
import { useGlobalContext } from "../../contexts/globalContexts";
import { dollar } from "../../utils/Icons";
import History from "../History/History";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
    // transactionHistory,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transations</h1>
        <div className="stats-container">
          <div className="chart-container">
            <Chart />
            <div className="amount-container">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expenses</h2>
                <p>
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="transaction-history">
            <History displayRecent={true} />
            <h2 className="salary-title">
              Min <span>Salary</span> Max
            </h2>
            <div className="salary-item">
              <p>
                $
                {incomes.length > 0
                  ? Math.min(...incomes.map((item) => item.amount))
                  : 0}
              </p>
              <p>
                $
                {incomes.length > 0
                  ? Math.max(...incomes.map((item) => item.amount))
                  : 0}
              </p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span> Max
            </h2>
            <div className="salary-item">
              <p>
                $
                {expenses.length > 0
                  ? Math.min(...expenses.map((item) => item.amount))
                  : 0}
              </p>
              <p>
                $
                {expenses.length > 0
                  ? Math.max(...expenses.map((item) => item.amount))
                  : 0}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-container {
      grid-column: 1 / 4;
      height: 400px;
      .amount-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 3.5rem;
            font-weight: 700;
          }
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 4.5rem;
          }
        }
      }
    }

    .transaction-history {
      grid-column: 4 / -1;
      padding: 0;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          margin: 0 1rem;
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dashboard;
