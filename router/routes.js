const express = require('express')
const router = express.Router();
const BookController = require('../controller/createBookController.js')

router.post('/createBook',BookController.createBook)
router.get('/getAllBooks',BookController.getAllBooks)
router.get('/getAllBookByName',BookController.getAllBookByName)
router.delete('/deleteBookById/:id',BookController.deleteBookById)


module.exports = router ;