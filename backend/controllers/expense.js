import Expense from "../models/ExpenseModel.js";

export async function addExpense(req, res) {
  const { title, amount, category, description, date } = req.body;

  const expense = Expense({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be greater than 0." });
    }
    await expense.save();
    res.status(200).json({ message: "Expense added successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occrured connecting to the server." });
  }

  console.log(expense);
}

export async function getExpenses(req, res) {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: "An error occured while attempting to connect with the server.",
    });
  }
}

export async function deleteExpense(req, res) {
  const { id } = req.params;
  Expense.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense deleted successfully." });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "An error occrured connecting to the server." });
    });
}
