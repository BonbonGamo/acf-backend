"use strict"
const router = require("express").Router()
const issueController = require("../controllers/issueController")

router.get("/test", issueController.test)

module.exports = router
