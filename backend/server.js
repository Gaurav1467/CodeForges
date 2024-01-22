const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const Space = require("./models/spaceSchema");
connectDB();

const port = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());
app.all("/health_check", function(request, response){ response.sendStatus(200)})
app.use("/spaces", require("./routes/spaceRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
