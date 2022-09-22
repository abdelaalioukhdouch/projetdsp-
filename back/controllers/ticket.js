const Ticket = require("../models/Ticket");
const { TICKET_NOT_FOUND, TICKET_ALREADY_USED } = require("../constants");
exports.consumeTicket = async (req, res) => {
  try {
    const { code } = req.query;
    let ticket = await Ticket.findOne({ code });
    if (!ticket) {
      return res.status(400).json({
        message: TICKET_NOT_FOUND,
      });
    }
    if (ticket.isClaimed) {
      return res.status(400).json({
        message: TICKET_ALREADY_USED,
      });
    }
    res.status(200).send({
      message: `Congratulations You got ${ticket.title}`,
      ticket,
    });
    ticket.isClaimed = true;
    ticket.isActive = false;
    await ticket.save();
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};
exports.getTicketCodes = async (req, res) => {
  try {
    const tickets = await Ticket.find(
      {},
      { code: 1, isClaimed: 1, title: 1, "_id": 0 }
    ).lean();
    res.status(200).send(tickets);
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};