const router = require('express').Router();

const Footballer = require('../models/footballer');

router.get('/', async (req, res) => {
    try {
        const footballers = await Footballer.all
        console.log(footballers)
        res.status(200).json({data: footballers})
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err })
    }
});



module.exports = router