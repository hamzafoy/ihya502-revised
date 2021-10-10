/*::::::::::::::::::::::::::::::::::::::::
::::::::  Required Dependencies  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');



/*::::::::::::::::::::::::::::::::::::::::
::  Running Express, connecting to the  ::
::  database & routes, & picking ports  ::
::::::::::::::::::::::::::::::::::::::::*/

const application = express();
application.use(cors({
    origin: true,
    credentials: true
}));
const connectingDB = require('./config/db');
const routes = require('./routes/routes');
const port = process.env.PORT || 8080;



/*::::::::::::::::::::::::::::::::::::::::
::::::::::::  Backend Tasks  :::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

connectingDB();

application.use(express.json({
    extended: false
}));
application.use('/api', routes);
application.listen(port, () => console.log(`This funky DJ is spinnin' tracks on port ${port}`));