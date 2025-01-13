const express = require("express");

const {fetchEvents} = require('../controllers/eventsControllers')

const {addEvent} = require('../controllers/eventsControllers')

const {updateEvent} = require('../controllers/eventsControllers')

const router = express.Router()

router.get('/', fetchEvents)
router.post('/', addEvent)
router.patch('/', updateEvent)
router.delete('/')
 
module.exports = router;