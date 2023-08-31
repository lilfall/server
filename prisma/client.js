const { PrismaClient } = require("@prisma/client");

if (process.env.NODE_ENV === "production") {
  const prisma = new PrismaClient();
  module.exports = prisma;
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  module.exports = global.prisma;
}
