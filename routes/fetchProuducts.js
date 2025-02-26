const express = require('express');
const router = express.Router();
const { productModel } = require('../schema/schema');

router.get('/', async (req, res) => {
    await productModel.find({}).lean().then(result => res.status(200).json({ status: 'success', data: result })).catch(err => res.status(400).json({ status: 'failed' }))
})

module.exports = router;
