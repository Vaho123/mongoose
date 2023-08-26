require("dotenv").config()
require("./db/connection")

const express = require("express")  //part of basic server


//const bookRouter = require("../books/routes")
const Book = require("../books/model")  // this line is OK
const bookRouter = require("../books/routes")


const app = express()  // part of basic server

app.use(express.json())  // part of basic server


app.use(bookRouter)
//make a basic route - to test
// Add localhost:5001/books into Thunderclient
// app.get("/books", (req, res) => {
//     res.send("Hello world from get route")
// })

//The endpoint book/getallbooks is got from the documentation in this case the read.txt
// app.get("/books/getallbooks", async (req, res) => {
  
//    //res.send ("Hello from the get route") // To test connection first

//     //Use the documentation - (mongoosejs.com) Which gives details for the xxx.find() method
//     //If find()  has an empty object -bring back everything
//     try {
//         const books = await Book.find({})
    
//          const successResponse = {
//             message: "success",
//             books: books
        
//         }
        
//         res.status(200).json(successResponse)
       
//     } catch (error) {
//         console.log(error)
//     }
// //    console.log("books: ", typeof books, Book)
// })


// Create route - post route
//addbook -because it is specified in the - made up for teaching - 'docs'
// "/books/addbook” – is from the design document – to fit in with other people also working on the same thing
// req and res is the callback
// app.post("/books/addbook", async (req, res) => {
//     // res.send("Hello from the addbooks route")

//     // We
//     try {
//                               //model Book, action create - taken from mongoose docs
//        const newBook = await Book.create({   // newBook stores the copy of the data which is returned from the database - a copy of what has been stored                      
//             title: req.body.title,
//             author: req.body.author,
//             genre: req.body.genre

//             // title: "test1",   // can use hard coding to test the principle works
//             // author: "auth1",
//             // genre: "gen1"
//         })  // the order of the above doesn't matter because they are key:value pairs
       
//         const successResponse = {
//             // message and newBook, because this is what is in the design i.e. the documentation
//             message: "succss",
//             newBook: newBook   // the second newBook, is what is sent back by the DB after the new entry has been created
//         }

//         //201 - the resource you wanted to add has been added
//         res.status(201).json(successResponse)

//     } catch (error) {
//         console.log(error)
//     }

// })



  


app.listen(5001, () => console.log("Server is listening"))  // part of basic server

