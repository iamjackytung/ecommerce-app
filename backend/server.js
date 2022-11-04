const express = require("express");
const app = express();
const port = 3000;
const apiRoutes = require("./routes/apiRoutes");

// app.use((req, res, next) => {
//   console.log("first middleware");
//   next();
// });

// app.get("/", (req, res, next) => {
//   console.log("second middleware");
//   res.send("Hello World! 111111");
//   next();
// });

// app.get("/two", (req, res, next) => {
//   console.log("third middleware");
//   res.send("Hello World 2!");
//   next();
// });

// app.use((req, res) => {
//   console.log("fourth middleware");
// });

app.get("/", (req, res) => {
  console.log("synchronous code");
  throw new Error("some error occured");
  res.json({ message: "API running..." });
});

app.get("/a", (req, res, next) => {
  setTimeout(() => {
    console.log("asynchronous code");
    // throw new Error("some error occured");
    next(new Error("some error occured"));
  }, 1000);
  // res.send("Hello World!");
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
