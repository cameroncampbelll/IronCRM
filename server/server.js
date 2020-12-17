const express = require("express");
const app = express();

const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: true }));
app.use((req, res, next) => {
  console.log("Hit");
  next();
});
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/leads", require("./routes/leads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
