const router = require('express').Router()

const { createCategory,updateCategory, deleteCategory, listCategory } = require('../controllers/category')

router.post('/category', createCategory)
      .put('/category/:categoryId', updateCategory)
      .delete('/category/:categoryId', deleteCategory)
      .get('/category', listCategory)

module.exports = router