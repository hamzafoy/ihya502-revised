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
    }
});



/*::::::::::::::::::::::::::::::::::::::::
::::::::::  Exporting Models  ::::::::::::
::::::::::::::::::::::::::::::::::::::::*/

const Feedback = mongoose.model('Feedback', visitorInputSchema);
module.exports = Feedback;