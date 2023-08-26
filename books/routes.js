const { Router } = require("express")
const bookRouter = Router()

const Book = require("./model")  

const { getAllBooks } = require("./controllers")

//express  get    route              function in controllers
bookRouter.get("/books/getallbooks", getAllBooks)

// bookRouter.get("/books/getallbooks", async (req, res) => {
  
//      try {
//          const books = await Book.find({})
     
//           const successResponse = {
//              message: "success",
//              books: books
         
//          }
         
//          res.status(200).json(successResponse)
        
//      } catch (error) {
//          console.log(error)
//      }

//  })

 bookRouter.post("/books/addbook", async (req, res) => {

    try {
                             
       const newBook = await Book.create({   
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre


        })  
       
        const successResponse = {
            
            message: "succss",
            newBook: newBook   
        }

        //201 - the resource you wanted to add has been added
        res.status(201).json(successResponse)

    } catch (error) {
        console.log(error)
    }

})

module.exports = bookRouter