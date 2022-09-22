const express = require("express");

const { consumeTicket, getTicketCodes } = require("../../../controllers/ticket");

const router = express.Router();

//  USER ROUTES
router.get("/consume", consumeTicket);
router.get("/get-codes", getTicketCodes);

module.exports = router;