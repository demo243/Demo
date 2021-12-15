const router = require('express').Router()

const { createProducts,updateProducts, deleteProducts, listProducts } = require('../controllers/products')

router.post('/products', createProducts)
      .put('/products/:productId', updateProducts)
      .delete('/products/:productId', deleteProducts)
      .get('/products', listProducts)

module.exports = router