const Book = require("./model")

const getAllBooks = async (req, res) => {
  
    try {
        const books = await Book.find({})
    
        //  const successResponse = {
        //     message: "success",
        //     books: books
        
        // }
        
        // res.status(200).json(successResponse)
        // This combines the above lines 8 - 14
        res.status(200).json({message:"success", books:books})
       
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getAllBooks
}