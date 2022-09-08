const app = require("express")();
const cors = require("cors");

const footballersController = require("./controllers/footballers")
const footballersControllerRandom = require("./controllers/randomFootballer")

app.use(cors());

app.use('/footballers', footballersController)
app.use('/random', footballersControllerRandom)


module.exports = app;