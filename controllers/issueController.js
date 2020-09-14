"use strict"
module.exports = {
  test: async (req, res, next) => {
    res.status(200).send({ data: "data" })
  },
}
