const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my over Smarty Pant!! with auto restart");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01788888888" },
  {
    id: 2,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "01788888888",
  },
  {
    id: 4,
    name: "Suchonda",
    email: "Suchonda@gmail.com",
    phone: "01788888888",
  },
  { id: 5, name: "Sraboni", email: "Sraboni@gmail.com", phone: "01788888888" },
];

app.get("/users", (req, res) => {
  // filter by search query parameter
  if (req.query.name) {
    const search = req.query.name;
    const matched = users.filter(
      (user => user.name.toLowerCase().includes(search))
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push;
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour soud fazle flavor");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
