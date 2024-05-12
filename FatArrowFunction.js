const express = require("express");
const path = require("path");
const app = express();
const members = require("./Members");
const logger = require("./Middleware/Logger");
const bodyParser = require("body-parser");

app.listen(5000);
app.use(logger);
app.use(bodyParser.json());
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modeule/bootstrap/dist/css"))
);
app.use(express.static(path.join(__dirname, "static")));
app.get("/", function (req, res) {
  res.send(
    'Hi This is Sanjeev The King "Who will rule the world !!! anyOne has a doubt"' +
      path.basename("JavaScriptNODE/FatArrowFunction.js")
  );
});
console.log(path.basename("JavaScriptNODE/FatArrowFunction.js"));
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter((members) => members.id === parseInt(req.params.id)));
});

app.get("/api/members", (req, res) => res.json(members));

app.post("/update", (req, res) => {
  // Assuming the request body contains the updated data
  const updatedData = req.body;
  console.log(typeof req.body);
  // Update the data (in this example, we'll just update the name)
  members.append(updatedData);

  // Send a response
  res
    .status(200)
    .json({ message: "Data updated successfully", updatedData: members });
});
