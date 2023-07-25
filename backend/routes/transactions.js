import { Router } from "express";
import { addIncome, deleteIncome, getIncome } from "../controllers/income.js";
import {
  addExpense,
  getExpenses,
  deleteExpense,
} from "../controllers/expense.js";

const router = Router();

// router.get("/", (req, res) => {
//   res.send("Hello World");
// });

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncome)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expense", deleteExpense);

export default router;
