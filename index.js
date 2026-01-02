const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello CI/CD New World 🚀" });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}
console.log(`Jenkins running`)
module.exports = app;
