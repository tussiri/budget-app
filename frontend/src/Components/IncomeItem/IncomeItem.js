import React from "react";
import styled from "styled-components";
import {
  dollar,
  calendar,
  comment,
  trash,
  money,
  stocks,
  users,
  acorn,
  card,
  piggy,
  book,
  food,
  medical,
  tv,
  takeout,
  clothing,
  travel,
  circle,
} from "../../utils/Icons";
import Button from "../Button/Button";
import { DateFormat } from "../../utils/DateFormat";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "acorns":
        return acorn;
      case "bank":
        return card;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "take out":
        return takeout;
      case "clothing":
        return clothing;
      case "travelling":
        return travel;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  return (
    <IncomeItemStyled indicator={indicatorColor}>
      <div className="icon">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              {dollar} {amount}
            </p>
            <p>
              {calendar} {DateFormat(date)}
            </p>
            <p>
              {comment} {description}
            </p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button
          icon={trash}
          bPad={"1rem"}
          bRad={"50%"}
          bg={"var(--primary-color)"}
          color={"#FFF"}
          iColor={"#FFF"}
          hColor={"var(--color-green)"}
          onClick={() => deleteItem(id)}
        />
      </div>
    </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  width: auto;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }
    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }
`;

export default IncomeItem;
