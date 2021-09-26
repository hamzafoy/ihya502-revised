/*::::::::::::::::::::::::::::::::::::::::
::::::::  Required Dependencies  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

const mongoose = require('mongoose');
const config = require('config');
const dbKey = process.env.MONGODB_URI || config.get('mongoURI');



/*::::::::::::::::::::::::::::::::::::::::
:::::  Connection to Mongo Database  :::::
::::::::::::::::::::::::::::::::::::::::*/

const connectingDB = async () => {
    try {
        await mongoose.connect(
            dbKey,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log(`This spaceship has successfully connected with MongoDB. . .`);

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};



/*::::::::::::::::::::::::::::::::::::::::
::::  Exporting Database Connection  :::::
::::::::::::::::::::::::::::::::::::::::*/

module.exports = connectingDB;