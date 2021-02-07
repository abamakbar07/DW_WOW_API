const {
   Transactions,
   User
} = require("../../models")

exports.addTransaction = async (req, res) => {
   try {
      const transaction = await Transactions.create({
         users: req.body.userId,
         transferProof: req.body.transferProof,
         remainingActive: 30,
         userStatus: "Active",
         paymentStatus: "Approved",
      });

      const users = await User.findOne({
        where: {
          id: req.body.userId,
        },
        attributes: {
          exclude: ["email", "createdAt", "updatedAt"],
        },
      });

      res.send({
        status: "success",
        data: {
          transaction: {
            id: transaction.id,
            users,
            transferProof: transaction.transferProof,
            remainingActive: transaction.remainingActive,
            userStatus: transaction.userStatus,
            paymentStatus: transaction.paymentStatus,
          },
        },
      });

   } catch (err) {
      console.log(err);
      res.status(500).send({
         message: "Server Error",
      });
   }
}