/*::::::::::::::::::::::::::::::::::::::::
::::::::  Required Dependencies  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

function asyncHandler(cb) {
    return async(req, res, next) => {
        try {
            await cb(req, res, next)
        } catch(error) {
            next(error);
        }
    }
}



/*::::::::::::::::::::::::::::::::::::::::
:::::::::::  Backend Routes  :::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

router.post('/', asyncHandler( async (req, res) => {
    console.log(req.body);
    let feedback;
    try {
        Feedback.create(req.body);
        console.log(`Feedback successfully submitted!`);
        res.end();
    } catch (error) {
        throw error;
    }
}));



/*::::::::::::::::::::::::::::::::::::::::
::::::::::  Exporting Routes  ::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

module.exports = router;