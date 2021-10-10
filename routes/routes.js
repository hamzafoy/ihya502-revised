/*::::::::::::::::::::::::::::::::::::::::
::::::::  Required Dependencies  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');



/*::::::::::::::::::::::::::::::::::::::::
:::::::::::  Backend Routes  :::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

router.post('/', (req, res) => {
    console.log(req.body);
    Feedback.create(req.body)
        .then(feedback => res.json({
            msg: `The feedback has been registered.`
        }))
});



/*::::::::::::::::::::::::::::::::::::::::
::::::::::  Exporting Routes  ::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

module.exports = router;