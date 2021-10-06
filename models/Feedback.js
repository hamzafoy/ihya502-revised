/*::::::::::::::::::::::::::::::::::::::::
::::::::  Required Dependencies  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/*::::::::::::::::::::::::::::::::::::::::
::::::::  Schema for MongoDB dB  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

const visitorInputSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});



/*::::::::::::::::::::::::::::::::::::::::
::::::::::  Exporting Models  ::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

const Feedback = mongoose.model('Feedback', visitorInputSchema);
module.exports = Feedback;