const prisma = require("../../prisma/client.js");

exports.getUsers = (req, res) => {
  try {
    prisma.user
      .findMany()
      .then((users) => {
        res.status(200).json({ message: "berhasil", data: users });
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    throw error;
  }
};
