import Income from "../models/IncomeModel.js";

export async function addIncome(req, res) {
  const { title, amount, category, description, date } = req.body;

  const income = Income({
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
    await income.save();
    res.status(200).json({ message: "Income added successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occrured connecting to the server." });
  }

  console.log(income);
}

export async function getIncome(req, res) {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({
      message: "An error occured while attempting to connect with the server.",
    });
  }
}

export async function deleteIncome(req, res) {
  const { id } = req.params;
  Income.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income deleted successfully." });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "An error occrured connecting to the server." });
    });
}
