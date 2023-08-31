const prisma = require("../../prisma/client.js");

exports.getUsers = async (req, res) => {
  await prisma.user
    .findMany()
    .then((users) => {
      res.status(200).json({ message: "berhasil", data: users });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error", data: error });
    });
};
