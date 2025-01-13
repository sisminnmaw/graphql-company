const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema, root } = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true // Enable GraphiQL UI
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
