const Ticket = require("../models/Ticket");




exports.addTickets = async (req, res) => {

  try {

    let randomCode = Math.floor(1000000000 + Math.random() * 9000000000);




    // create new tickets in db

    let ticketsArray = [];

    for (var i = 0; i < 500; i++) {

      ticketsArray.push({

        code: Math.floor(1000000000 + Math.random() * 9000000000),

        title:

          i < 20

            ? "Coffret découverte d'une valeur de 69€"

            : i < 50

            ? "Coffret découverte d'une valeur de 39€"

            : i < 100

            ? "Boite de 100g de thé signature"

            : i < 200

            ? "Boite de 100g de thé détox ou thé infusion"

            : "Un infuseur à thé",

        isClaimed: false,

        isActive: true,

      });

    }

    let shuffledTicketsArray = await ticketsArray

      .map((value) => ({ value, sort: Math.random() }))

      .sort((a, b) => a.sort - b.sort)

      .map(({ value }) => value);

    await Ticket.insertMany(shuffledTicketsArray);

    res.send({

      code: "tickets added",

    });

  } catch (err) {

    res.status(500).json({

      message: err.toString(),

    });

  }

};