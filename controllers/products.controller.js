const { data } = require('../data/data');
const db = require('../models');

exports.getProducts = async (req, res) => {
  try {
    //If i was implemented the db it was like this :
    // const products = await db.Produit.findAll();
    // res.json(products);

    const products = data;
    res.json(products);

  } catch (error) {
    console.error('Error get product:', error);
    res.status(500).json({ message: 'Error server' });
  }
};
