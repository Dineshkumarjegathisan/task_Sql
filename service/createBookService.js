const db = require('../Connection/db_config.js')

async function createBook(reqBody){
    try {
       
       
        // const { bookName, bookPrice, publishYear, stock, category } = reqBody;
        const res = await new Promise((resolve, reject) => {
            // const myQuery = `insert into Books (bookId,bookName,bookPrice,publishYear,stock,category)values(?) ;`
            const myQuery = `insert into Books (bookId,bookName, bookPrice, publishYear, stock, category) values (?, ?, ?, ?, ?, ?)`;

            db.query(myQuery, [reqBody.bookId,reqBody.bookName, reqBody.bookPrice, reqBody.publishYear, reqBody.stock, reqBody.category],(err,data)=>{
                if(err)
                {
                  return reject(err)
                }
                else{
                    
                    return resolve(data)
                }
            });
        })
        return res ;
    } catch (err) {
        throw err ;
    }
}

async function getAllBooks(limit,offset){
    try {
         console.log('====>',limit+'+++',offset);
            return new Promise((resolve, reject) => {
            if (typeof limit === 'string' && typeof offset === 'string') {
                limit = parseInt(limit)
                offset = parseInt(offset)
                if (isNaN(limit) || isNaN(offset)) {
                    return "enter valid limit"
                }
            }
            const myQuery = 'select * from Books limit ? offset ?'
            db.query(myQuery,[limit,offset],(err,data)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data)
                }
            })
        }) 
    } catch (err) {
        throw err ;
    }
}

async function getAllBookByName(search){
    try {
        return new Promise((resolve, reject) => {
              const myQuery = 'select * from Books where bookName  regexp ?'
            //  const myQuery =`select * from Books where bookName like '%${search}%'`
            db.query(myQuery,[search],(err,data)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(data)
                }
            })
        })   
    } catch (err) {
        throw err ;
    }
}

async function deleteBookById(bookId){
    try {
        console.log('=====>',bookId);
        const result =  new Promise((resolve, reject) => {
            const myQuery = 'DELETE FROM Books WHERE bookId = ?'
            console.log("================>",myQuery);
           db.query(myQuery,[bookId],(err,data)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data)
                }
            })
        });
        return result ;
    } catch (err) {
        throw err ;
    }

}

async function updateBookById(bookId){
    try {
        const response = new Promise((resolve, reject) => {
            const myQuery = "UPDATE Books SET column1 = ?, WHERE bookId = ?";
            db.query(myQuery,[bookId],(err,data)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(data)
                }

            })
        })
        return response ;
    } catch (err) {
        throw err ;
    }

}

module.exports = {createBook,getAllBooks,getAllBookByName,deleteBookById,updateBookById};

