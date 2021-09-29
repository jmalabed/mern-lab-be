const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')

router.get('/', async (req,res)=>{
  try {
    const allProducts = await Product.find()
    res.status(200).json(allProducts)
  } catch (err) {
    console.log(err);
    res.status(400).json({error: err.message})
  }
})

router.get('/:id', async (req,res) => {
  try {
    const foundProduct = await Product.findById(req.params.id)
    res.status(200).json(foundProduct)
  } catch (err) {
    res.status(400).json({error: err.message})
  }
})

router.post('/', async (req,res)=> {
  try {
    const createdProduct = await Product.create(req.body)
    res.status(200).json(createdProduct)
  } catch (err) {
        res.status(400).json({error: err.message})
  }
})

router.delete('/:id', async (req,res)=> {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedProduct)
  } catch (err) {
      res.status(400).json({error: err.message})
  }
})

router.put('/:id', async (req,res)=> {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct)
  } catch (err) {
      res.status(400).json({error: err.message})
  }
})


module.exports = router
