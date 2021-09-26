/*::::::::::::::::::::::::::::::::::::::::
::::::::  Required Dependencies  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');



/*::::::::::::::::::::::::::::::::::::::::
:::::::::::  Backend Routes  :::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

router.get('/', (req, res) => {
    console.log(`Spaceship docked at the root!`)
})



/*::::::::::::::::::::::::::::::::::::::::
:::::::::: Exporting Routes  :::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

module.exports = router;