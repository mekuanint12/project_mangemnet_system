const mongoose = require("mongoose"); 
const dotenv = require("dotenv");

dotenv.config();
const app = require('./app');


const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('DB connection is successful!')).catch(err => console.log(err));


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

