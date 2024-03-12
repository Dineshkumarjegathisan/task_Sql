const BookService = require('../service/createBookService.js')
const  uuidv4  = require('uuid')


async function createBook(req,res){
    try {
        const reqBody = {
            bookId :uuidv4.v4(),
            bookName: req.body.bookName,
            bookPrice : req.body.bookPrice,
            publishYear :req.body.publishYear,
            stock : req.body.stock,
            category : req.body.category
                      }
        const result = await BookService.createBook(reqBody)
        res.status(201).json({
            result
        })
        
    } catch (err) {
        throw err ;
    }
}

async function getAllBooks(req,res){
    try {
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0
        const result = await BookService.getAllBooks(limit,offset);
        res.status(200)
        .json({
            result
        })
        
    } catch (err) {
        throw err ;
    }

}

async function getAllBookByName(req,res){
    try {
        const search = req.query.search 
        const result = await BookService.getAllBookByName(search);
        res.status(200)
        .json({
            result
        })
        
    } catch (err) {
        throw err ;
    }
}

async function deleteBookById(req,res){
    try {
    
        console.log("====>",req.params.id);
        const result = await BookService.deleteBookById(req.params.id)
        res.status(200)
        .json({
            result
        })
        
    } catch (err) {
        throw err ;
    }
}


module.exports = {createBook,getAllBooks,getAllBookByName,deleteBookById}