const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const { mongoose } = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

const db_pass = "Y9MIhrQaWKxzXXg7";
const db_url = `mongodb+srv://robertsibek:${db_pass}@cluster0.sftgpaj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db_url);
mongoose.connection.once("open", () => {
  console.log("Connected to DB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => {
  console.log("Now listening on port 4000 now");
});
