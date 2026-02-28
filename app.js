const express = require("express");
const app = express();
const path = require("path"); // Fixed: Path require kiya
require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Fixed Middleware: path ko public/uploads se connect kiya
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

app.listen(3000, () => {
    console.log("🚀 Server Started at http://localhost:3000");
});