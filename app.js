const express = require('express');
const productsController = require('./controllers/products.controller');
const cors = require('cors');

const app = express();
const PORT = 3001;// or process.env.PORT

app.use(express.json());
app.use(cors());

app.get('/products', productsController.getProducts);

app.listen(PORT, () => {
  console.log(`Listen on the port: ${PORT}`);
});
