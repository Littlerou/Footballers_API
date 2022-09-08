const router = require('express').Router();

const Footballer = require('../models/footballer');

router.get('/', async (req, res) => {
    try {
        const footballers = await Footballer.all
        const index =  Math.floor(Math.random()*footballers.length)
        const randomFootballer = footballers[index]
        
        res.status(200).json({data: randomFootballer})
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: err })
    }
});



module.exports = router