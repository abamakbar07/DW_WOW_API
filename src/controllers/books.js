const {
   Books
} = require("../../models")

exports.getBooks = async (req, res) => {
   try {
      const books = await Books.findAll({
         attributes: {
            exclude: ["createdAt", "updatedAt"]
         }
      })

      res.send({
         status: "success",
         data: {
            books
         }
      })
   } catch (err) {
      console.log(err);
      res.status(500).send({
         message: "Server Error",
      });
   }
}

exports.getBookDetail = async (req, res) => {
   try {
      const {
         id
      } = req.params
      const book = await Books.findOne({
         where: {
            id: id
         }
      });

      res.send({
         status: "success",
         data: {
            book
         }
      })
   } catch (err) {
      console.log(err);
      res.status(500).send({
         message: "Server Error",
      });
   }
}