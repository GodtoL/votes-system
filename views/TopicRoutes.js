const express = require('express')
const router = express.Router()
const topicController = require('../controllers/topicController.js');

router.get('/', topicController.get)

router.post('/', topicController.insert)

router.route("/:id")
    .get(topicController.getDetail)
    .put(topicController.update)
    .delete(topicController.delete)
    .patch(topicController.voteCount)

module.exports = router