import express from "express";
import router from "./routes/contactRoutes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Address Book API is running 🚀");
});


app.use("/", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Address Book service is running on port ${PORT}`);
});
